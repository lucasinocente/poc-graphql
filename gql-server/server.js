const express = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
const fetch = require('node-fetch');
const cors = require('cors')

// GraphQL schema
const schema = buildSchema(`
    type Query {
        accounts: [Account!]!
    }
  
    type Account {
        user: String!
        label: String!
        agencia: String!
        conta: String!
        cpf: String!
    }
`);

const resolvers = {
    accounts: () => {
        return fetch(`http://localhost:3000/accounts`).then(res => res.json())
    }
}

const app = express();

app.use(cors())

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Express GraphQL Server Now Running On localhost:4000/graphql')
});
