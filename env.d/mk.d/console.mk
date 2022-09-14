#!/usr/bin/env make

.PHONY: console__backend-service

console__backend-service:
	@docker-compose exec backend-service sh