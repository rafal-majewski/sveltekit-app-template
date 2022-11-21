# sveltekit-app-template

This is a template for a SvelteKit TypeScript project.

The following following tools have been configured:

- [Vitest](https://www.npmjs.com/package/vitest) for unit testing
- [Playwright](https://www.npmjs.com/package/playwright) for end-to-end testing
- [ESLint](https://www.npmjs.com/package/eslint) for linting
- [Prettier](https://www.npmjs.com/package/prettier) for code formatting
- [TypeScript](https://www.npmjs.com/package/typescript) for TypeScript support

## Usage

### Install dependencies

```bash
npm ci
```

### Edit the code

You can edit the code in the `src` directory.

### Run the application in development mode

```bash
npm run dev
```

### Build the application

```bash
npm run build
```

This will create a `build` directory with the built application.

### Run the build application

To run with `NODE_ENV=development`:

```bash
npm run preview
```

To run with `NODE_ENV=production`:

```bash
npm run start
```

Note: This will command will fail if the application has not been built (no `build` directory)!

### Test the application

Tests can be found in the `test` directory.
[Vitest](https://www.npmjs.com/package/vitest) is used to run and write the tests.

To run the unit tests:

```bash
npm run vitest-check
```

This will run the tests and also providing a tabular code coverage report.
An HTML code coverage report will be also generated in the `coverage_report` directory.

To run the end-to-end tests:

```bash
npm run playwright-check
```

### Run the linter

```bash
npm run eslint-check
```

Note: The linter will return a non-zero exit code if there are any linting errors or warnings.

You can also try to automatically fix some of the errors and warnings by running:

```bash
npm run eslint-fix
```

### Run the formatter

```bash
npm run prettier-check
```

Formatting errors can be automatically fixed by running:

```bash
npm run prettier-fix
```

## CI Pipeline

The CI pipeline is configured in the `.github/workflows/ci.yml` file.
It consists of the following jobs:

### ESLint check

```bash
npm run eslint-check
```

### Prettier check

```bash
npm run prettier-check
```

### Vitest check

```bash
npm run vitest-check
```

You can later download the coverage report as an artifact named `coverage_report`.

### Playwright check

```bash
npm run playwright-check
```

### npm audit check

```bash
npm run npm-audit-check
```

### Build check

Check if the code can be built.

```bash
npm run build-check
```

### Building the application

This job requires all the previous formatting-unrelated jobs to pass.

```bash
npm run build
```

You can later download the built application as an artifact named `build`.
