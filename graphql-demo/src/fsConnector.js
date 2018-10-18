const fs = require("fs");

function loadData(dataPath, initialData) {
	if (fs.existsSync(dataPath)) {
		return JSON.parse(fs.readFileSync(dataPath, "utf8"));
	}

	return initialData;
}

function writeData(dataPath, data) {
	fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

module.exports = (dataPath, initialData) => {
	let state = loadData(dataPath, initialData);

	return {
		get: key => {
			return state[key];
		},
		set: (key, value) => {
			state[key] = value;

			writeData(dataPath, state);
		}
	};
};
