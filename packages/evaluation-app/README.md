# Evaluation App

An NextJs evaluation app written in Typescript for evaluating E2E Frontend Testing Frameworks.

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app` and modified with following changes.

- **Database Migration:** The application now uses PostgresSQL instead of MySQL for Vercel compatibilities.
- **OAuth Integration:** Switched from NextAuth to Clerk.
- **Feature Integration:** [Features for Evaluation](#features-for-evaluation)

### Setting Up the Database

To configure the database, perform the following steps:

1. Start the MySQL Docker container using Docker Compose:

```bash
docker compose up -d
```

2. Sync the database with the Prisma schema:

```bash
pnpm db:generate
```

## Starting the Application

1. Go to ./packages/evaluation-app and create .env file and copy content from .env.example

2. This following secrets need to be modified in .env marked with #HERE
```ini
#Request the necessary keys from the development team for faster local deployment.
#Alternatively, generate your own keys, but be aware that this may require additional setup time.

#To generate the key go to https://resend.com/
RESEND_API_KEY=#HERE
#If you generate your own resend api key then you may update the email sender
RESEND_EMAIL_SENDER="Evaluation App <user@evaluation-app.solaimani.de>"

#To generate the keys go to https://clerk.com/
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=#HERE
CLERK_SECRET_KEY=#HERE

```

3. Once the setup is complete, you can start the application with:

```bash
pnpm app:start
```

## Features for Evaluation

- **Session Management:** Ensures session handling works as expected.
- **Canvas Testing:** Validates canvas-related functionality.
- **File Upload/Download:** Tests upload and download workflows.
- **Cookies Handling:** Confirms correct cookie management.
- **Email Testing:** Simulates and validates email flows.
- **Timestamp Validation:** Ensures timestamps are properly generated and processed.
- **Sockets Testing:** Validates real-time socket communication.
- **tRPC Integration:** Tests API interactions via tRPC.
