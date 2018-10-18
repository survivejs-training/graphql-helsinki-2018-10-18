const path = require("path");
const { graphql } = require("graphql");
const { importSchema } = require("graphql-import");
const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./_resolvers");

const typeDefs = importSchema(path.join(__dirname, "./schema.graphql"));

describe("Query#hello", () => {
	it("should return internal state", async () => {
		const query = `
        query {
            hello
        }
		`;

		const internalState = "foobar";
		const schema = makeExecutableSchema({
			typeDefs,
			resolvers: resolvers({
				get() {
					return internalState;
				}
			})
		});
		const result = await graphql(schema, query);

		expect(result.data.hello).toEqual(internalState);
	});
});

describe("Mutation#changeHello", () => {
	it("should change internal state", async () => {
		const testValue = "test hello again";
		const query = `
        mutation {
            changeHello(newHello: "${testValue}")
        }
        `;

		const internalState = {};
		const schema = makeExecutableSchema({
			typeDefs,
			resolvers: resolvers({
				get() {
					return internalState;
				},
				set(k, v) {
					internalState[k] = v;
				}
			})
		});
		const result = await graphql(schema, query);

		expect(result.data.changeHello).toEqual(testValue);
		expect(internalState).toEqual({ hello: testValue });
	});
});
