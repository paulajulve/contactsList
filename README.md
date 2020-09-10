# Contact list (CRUD)

Simple contact list exercise to exemplify a CRUD case using Ruby on Rails framework.

Definitions:
- Each contact will have a first name, a last name, an email address and a phone number. All mandatory.
- Each contact will be uniquely identified by their email address.
- A postgreSQL database will be used for persistence.

## Spin up the project
A docker environment has been added so that you can easily build up the project and see it working locally.

First, you'll need to install:
- [Docker](https://docs.docker.com/get-docker/)
- [docker compose](https://docs.docker.com/compose/install/)

Once you have both tools, you can simply build and spin up the project:
```
$ docker-compose build
$ docker-compose up -d
```
If this is the first time setting up the project, you'll need to create the database and run the migrations.
```
$ docker-compose run web rake db:create
$ docker-compose run web rake db:migrate
```

Next time, you'll only need to spin up the docker containers with `docker-compose up -d` and you'll be ready to go.

>Note: if you're running on linux, make sure you are the owner of the files or the build will fail. You can always change the ownership of the files with `sudo chown -R $USER:$USER .`

Go to `localhost:3000` to see the app runing :)

## Shut down
Gracefully shut down the project with `docker-compose down`.

## Run the tests

You can run the tests from the console with `docker-compose run web rake test`
