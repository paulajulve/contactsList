# Contact list (CRUD)

Simple contact list exercise to exemplify a CRUD case using Ruby on Rails framework.

Definitions:
- Each contact will have a first name, a last name, an email address and a phone number. All mandatory.
- Each contact will be uniquely identified by their email address.
- A postgreSQL database will be used for persistence.

## Spin up the project
A docker environment has been added so that you can easily build up the project and see it working locally.

If you don't have these tools already, you'll need to install:
- [Docker](https://docs.docker.com/get-docker/)
- [docker compose](https://docs.docker.com/compose/install/)

If this is the first time setting up the project, you can set it all up by running: `make build`

Next time, you'll only need to spin up the docker containers with `docker-compose up -d` and you'll be ready to go.

Go to `localhost:3000` to see the app runing :)

## Shut down
Gracefully shut down the project with `docker-compose down`.

## Run the tests
You can run the tests from the console with `make test`
