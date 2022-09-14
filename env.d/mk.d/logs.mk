#!/usr/bin/env make

.PHONY: logs__backend

logs__backend:
	@docker-compose logs -f backend-service
