## End-to-End (E2E) Testing

### Playwright E2E

1. Create .env file and copy content from .env.example
2. Run Playwright E2E tests. The results will not be displayed in detail in the terminal.

```bash
pnpm pw:run
```

3. To generate and open an HTML report of the Playwright test results, execute the following command inside the `packages/e2e-playwright` directory:

```bash
pnpm exec playwright show-report
```

