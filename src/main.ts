import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';

class Main {
  private app: INestApplication;
  private config: ConfigService;

  public async bootstrap(): Promise<void> {
    await this.initializeApp();
    this.useMiddleware();

    await Promise.all([
      this.bootstrapMicroservices(),
      this.bootstrapHttpService(),
    ]);
  }

  private async initializeApp(): Promise<void> {
    this.app = await NestFactory.create(AppModule);
    this.config = this.app.get(ConfigService);
  }

  private useMiddleware(): void {
    // add middleware in the future
  }

  private bootstrapHttpService(): Promise<INestApplication> {
    const port = this.config.get('BACKEND_PORT');

    return this.app.listen(port);
  }

  private bootstrapMicroservices(): Promise<INestApplication> {
    return this.app.startAllMicroservices();
  }
}

new Main().bootstrap();
