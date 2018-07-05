"use strict";

// Connect
var graph = graphql("http://localhost:4000/graphql");

// Prepare
var accounts = graph("query { accounts { user label agencia conta cpf } }");

// Run
accounts().then(function (accounts) {
  console.log(accounts);
});