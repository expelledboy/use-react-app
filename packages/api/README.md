# API

### Dev Introduction

Based on:

- [graphql-yoga](https://github.com/prisma/graphql-yoga)
- [graphql-shield](https://github.com/maticzav/graphql-shield)
- [GraphQL Nexus](https://graphql-nexus.com/)

Good to read:

- [Problems of schema first development](https://www.prisma.io/blog/the-problems-of-schema-first-graphql-development-x1mn4cb0tyl3)
- [Explore the Prisma client API](https://www.prisma.io/client/client-typescript)
- [Learn more about the GraphQL schema](https://www.prisma.io/blog/graphql-server-basics-the-schema-ac5e2950214e/)

### Manage data

Use [Prisma Admin](https://www.prisma.io/docs/prisma-admin/overview-el3e/) to view and edit your data.

```sh
open http://docker:4000/_admin
```

### Query API

Use [GraphQL Playground](https://github.com/prisma/graphql-playground) to explore the generated API.

```sh
open http://docker:4000/
```

### Evolving the schema

Manipulate the [`Query`](./src/resolvers/Query.ts) and [`Mutation`](./src/resolvers/Mutation.ts) types.

The `start` script also starts a development server that automatically updates your schema every time you save a file. This way, the auto-generated [GraphQL schema](./src/schema.graphql) updates whenever you make changes in to the `Query` or `Mutation` types inside your TypeScript code.
