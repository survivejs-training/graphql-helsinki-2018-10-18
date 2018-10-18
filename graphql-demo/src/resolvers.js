const resolvers = {
  Mutation: {
    changeHello: (_, { newHello }) => {
      console.log(newHello);

      return 'foobar'
    }
  },
  Query: {
    hello: () => 'world!',
  },
};

export default resolvers;