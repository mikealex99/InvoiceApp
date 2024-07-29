  <h4 align="center">NestJS - TypeScript - PostrgeSQL - Prisma - GraphQL</h4>

## Description

This project is the server-side application for managing invoices. It provides APIs for user authentication and managing invoices, leveraging GraphQL for data fetching and mutations.

## Features

- **User Authentication**: Login functionality with JWT.
- **Invoice Management**: Create, read, update, and delete invoices.
- **GraphQL Integration**: Provides a GraphQL API for the client.
- **Prisma ORM**: Uses Prisma to interact with the database.

## Installation

1. **Install dependencies:**
   npm install

2. **Set up environment variables:**

   - Create a `.env` file in the root directory.
   - Add the following variables:
     DATABASE_URL="your-database-url"
     JWT_SECRET="your-secret-key"

3. **Set up the database:**
   - Run the Prisma migrations: npx prisma migrate dev --name init
   - Generate Prisma client: npx prisma generate

## Running the Application

**Start the development server:**

- npm run start:dev
  This will start the server on `http://localhost:3000/graphql`.
