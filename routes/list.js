const bodyParser = require("./bodyParser.js");

module.exports = function(app, db) {
	app.get("/getList", (req, res) => {
		console.log("getlist");
		const collection = db.get("list");
		collection.find({}).then(data => res.send(data));
	});

	app.post("/addNewElement", bodyParser.jsonParser, (req, res) => {});
};
