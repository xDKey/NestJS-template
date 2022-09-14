# NestJS Template
This is the template repository for my project based on the [NestJS framework](https://nestjs.com/)

### What's included:
- Git branches with predefined [strategy](#branch-strategy)
- Docker image with docker-compose
- ESLint (with rules which I prefer)
- Prettier
- Base structure of application
- Make commands for more convenient manipulating of project
- Initial packages are installed
- Jest with initial config

### What's planned:
- [ ] Add base CI/CD pipeline
- [ ] Add coverage badge
- [ ] Add initial settings for PostgresQL and MongoDB

---

## <a name="branch-strategy"></a>Git branch strategy
There are two branches:
- **master** - test environment
- **production** - production environment

Each change in the code base must follow the next strategy:
1. Create new branch based on master branch with according prefix
   - ```feature/``` - using for all new features
   - ```bugfix/``` - using for production bugfixes
   - ```improvement/``` - using for polishing of existing features
2. Commit and push your changes
3. Open a PR to master branch
4. After a bunch of features and improvements you should create release PR from master to production branch (don't forget increase version and new git tag)
