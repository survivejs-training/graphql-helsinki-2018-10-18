let helloState = 'world!'


const resolvers = {
  Mutation: {
    changeHello: (_, { newHello }) => {
      helloState = newHello

      return helloState
    }
  },
  Query: {
    hello: () => helloState
  },
};

export default resolvers;