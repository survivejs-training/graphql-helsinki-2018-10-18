const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const cuid = require("cuid");

const IMAGE_PATH = path.join(__dirname, "uploads");

mkdirp.sync(IMAGE_PATH);

module.exports = ({ get, set }) => ({
	Mutation: {
		changeHello: (_, { newHello }) => {
			set("hello", newHello);

			return newHello;
		},
		uploadImage: (_, { newImage }) => {
			const buffer = Buffer.from(newImage, "base64");
			const imagePath = path.join(IMAGE_PATH, "dummy.png");
			const imageId = cuid();

			fs.writeFileSync(imagePath, buffer, "binary");

			return imageId;
		}
	},
	Query: {
		hello: () => get("hello")
	}
});
