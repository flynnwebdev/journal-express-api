# Heroku deployment

1. Login to your Heroku account

```sh
heroku login
```

2. Create a Heroku app with a Postgres database

```sh
heroku create --addons=heroku-postgresql:hobby-dev
```

3. Push the local database to Heroku

```sh
heroku pg:push postgres://postgres:postgres@localhost:5432/journal postgresql-reticulated-91520
```

4. Make the necessary changes to code (see [branch diff](https://github.com/flynnwebdev/journal-express-api/compare/deploy?expand=1): main <--> deploy)

5. Deploy to Heroku

```sh
git push heroku main # Or git push heroku <source-branch>:main
```
