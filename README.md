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

## validator (type)

| type       | zod            | tiny-schema-validator |
| :--------- | :------------- | :-------------------- |
| Constants  | literal()      | constant()            |
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

## Literals / Constants

|      | zod                           | tiny-schema-validator         |
| :--- | :---------------------------- | :---------------------------- |
| type | `string \| number \| boolean` | `string \| number \| boolean` |

## Strings

|                | zod        | tiny-schema-validator |
| :------------- | :--------- | :-------------------- |
| validation     | max()      | maxLength             |
|                | min()      | minLength             |
|                | length()   |                       |
|                | email()    |                       |
|                | url()      |                       |
|                | uuid()     |                       |
|                | cuid()     |                       |
|                | regex()    | pattern               |
|                | nonempty() |                       |
|                | optional() | optional              |
| custom message | yes        | yes                   |

## Numbers

|                | zod           | tiny-schema-validator           |
| :------------- | :------------ | :------------------------------ |
| validation     | gt()          |                                 |
|                | gte()         | min                             |
|                | lt()          |                                 |
|                | lte()         | max                             |
|                | int()         |                                 |
|                | positive()    |                                 |
|                | nonnegative() |                                 |
|                | negative()    |                                 |
|                | nonpositive() |                                 |
|                | multipleOf()  |                                 |
|                |               | is ('integer', 'float', 'both') |
| custom message | yes           | yes                             |
