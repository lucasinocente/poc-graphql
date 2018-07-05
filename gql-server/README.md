# SEP GraphQL Server

What is GraphQL? Learn:

- https://www.howtographql.com
- https://graphql.org/learn/

## Install

`npm install`

## Run

`node server.js`

## Access

`http://localhost:4000/`

## Query

```
query {
  message
}
```

```
query {
  accounts {
    user
    label
    agencia 
    conta
    cpf
  }
}
```
