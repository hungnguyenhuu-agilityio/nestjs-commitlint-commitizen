# NestJS boilerplate

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Stacks

1. NestJS - 10.0.0
2. Commitlint - 19.5.0
3. Commitizen - 4.3.1
4. Prettier - 3.0.0
5. Docker - 27.3.1
6. Node - 20.8
    - pnpm

## Project setup

```bash
# Install the module
$ pnpm install

# Update the environment file
# Access to .env file or create if not existed
# your_environment should be [local, staging, production]
$ NODE_ENV=your_environment

# Expose port for application
$ PORT=your_port
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Contribute

- Author - [Hung Nguyen Huu](https://github.com/hungnguyenhuu-agilityio)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
