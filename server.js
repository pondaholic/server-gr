const { graphql, buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');
const express = require('express');

const schema = buildSchema(`type Query{hello: String}`);

const root = {
	hello: () => {
		return 'Hello world!';
	}
};

const app = express();

app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true
	})
);

app.listen(8080);
console.log('Running a GraphQL API server at localhost:8080/graphql');
