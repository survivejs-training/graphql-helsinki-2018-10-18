const path = require("path");
const { graphql } = require("graphql");
const { importSchema } = require("graphql-import");
const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = importSchema(path.join(__dirname, "./schema.graphql"));
const schema = makeExecutableSchema({ typeDefs, resolvers });

describe("Query#hello", () => {
	it("should return internal state", async () => {
		const query = `
        query {
            hello
        }
        `;
		const result = await graphql(schema, query);

		console.log("result", result);

		// TODO: Assert internal state here
		expect(true).toEqual(false);
	});
});

describe("Mutation#changeHello", () => {
	it("should change internal state", async () => {
		const query = `
        mutation {
            changeHello(newHello: "test hello again")
        }
        `;

		// TODO: Figure out a good test
		expect(true).toEqual(false);
	});
});
