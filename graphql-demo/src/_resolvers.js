module.exports = ({ get, set }) => ({
	Mutation: {
		changeHello: (_, { newHello }) => {
			set("hello", newHello);

			return newHello;
		}
	},
	Query: {
		hello: () => get("hello")
	}
});
