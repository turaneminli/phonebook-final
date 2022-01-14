# Implemented Unit Tests with Jest and Supertest

## Localhost MySQL server should be configured in `.env`

```env
SQL_DATABASE_NAME = ""
SQL_USERNAME = ""
SQL_PASSWORD = ""
```

## Running tests

```cmd
npm test
```

## Output should be as following

```cmd
 PASS  tests/main.test.js
  Main Controller Tests
    √ DB connection (130ms)
    √ Add user (/POST) (36ms)
    √ Edit user (/PUT) (31ms)
    √ Get the list of users (/GET) (12ms)
```
