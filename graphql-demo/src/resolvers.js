const path = require("path");
const resolvers = require("./_resolvers");
const fsConnector = require("./fsConnector");

// TODO: Extract state and logic so it's testable
const DATA_PATH = path.join(__dirname, "./data.json");

module.exports = resolvers(fsConnector(DATA_PATH, { hello: "world!" }));
