## Steps required to run the project locally

1. Download the repo on your local machine
2. Create env file wiht `cp .env.example .env`
3. Run `docker-compose up`
4. Open `localhost:3000`
5. The database is seeded with 10 events. You can add more events by running `php artisan db:seed` in the `api`
   container.

## Backend

* Laravel v10.39.0
* PHP v8.2.0

For medium and large size project I would use DDD approach,
in this case I tried to keep it simple and just demonstrated my knowledge of the framework.
The main directory is `src/` where we have 2 subdirectories:

* `Controllers` - contains all controllers and related request and response models.
* `Domain` - contains all domain logic.

We have 1 endpoint:

* GET /api/events - returns all events

`Api Resources` were used to transform the data from the database to the response format.

## Frontend

* React v18.2.0

## PHPMyAdmin
For easier database management I added PHPMyAdmin.
* localhost:8090

```text
user: admin
password: admin
```

## Database
* MySQL v8.2.0