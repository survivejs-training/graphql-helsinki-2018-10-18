const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, './data.json');



let helloState = loadData(DATA_PATH, 'world!');

const resolvers = {
  Mutation: {
    changeHello: (_, { newHello }) => {
      helloState = newHello;

      saveData(DATA_PATH, helloState);

      return helloState;
    }
  },
  Query: {
    hello: () => helloState
  },
};

function loadData(dataPath, initialData) {
  if (fs.existsSync(dataPath)) {
    return fs.readFileSync(dataPath, 'utf8')
  }

  return initialData;
}

function saveData(dataPath, data) {
  fs.writeFileSync(dataPath, data);
}

export default resolvers;