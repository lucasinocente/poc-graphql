# POC GraphQL

## To install and run

### Client

```
cd /client
npm install http-server -g
http-server
```

### GraphiQL Server

```
cd /gqp-server
npm install
node server.js
```

### Rest-API

```
cd /rest-api
npm install -g json-server
json-server --watch accounts.json
```

### To access

http://localhost:8080/