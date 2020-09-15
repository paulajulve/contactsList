.PHONY: build
build:
	docker-compose build
	docker-compose up -d
	docker-compose run web rake db:create
	docker-compose run web rake db:migrate
	docker-compose run web rails generate react:install

.PHONY: test
test:
	docker-compose run web rake test
	docker-compose run web bundle exec rspec