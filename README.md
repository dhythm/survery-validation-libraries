# Getting Started with Create React App

```bash
npx create-react-app survey-validation-libraries --template typescript
```

## Zod

https://github.com/colinhacks/zod

```bash
yarn add zod
```

## tiny-schema-validator

https://github.com/5alidz/tiny-schema-validator

```bash
yarn add tiny-schema-validator
```

## Material UI

https://mui.com/

```bash
yarn add @mui/material @mui/styled-engine-sc styled-components
yarn add @mui/icons-material
```

# Zod vs tiny-schema-validator

## validator

| type       | zod            | tiny-schema-validator |
| :--------- | :------------- | :-------------------- |
| Primitives | string()       | string()              |
|            | number()       | number()              |
|            | bigint()       |                       |
|            | boolean()      | boolean               |
|            | date()         |                       |
|            | undefined()    |                       |
|            | null()         |                       |
|            | void()         |                       |
|            | any()          |                       |
|            | unknown()      |                       |
|            | never()        |                       |
| Constants  | literal()      |                       |
|            |                | constant()            |
| Others     | enum()         |                       |
|            | optional()     |                       |
|            | nullable()     |                       |
|            | object()       |                       |
|            | array()        | listof()              |
|            | tuple()        | list()                |
|            | union()        | union()               |
|            | record()       | record()              |
|            |                | recordof()            |
|            | map()          |                       |
|            | set()          |                       |
|            | intersection() |                       |
|            | promise()      |                       |
|            | instanceof()   |                       |
|            | function()     |                       |
|            | preprocess()   |                       |
