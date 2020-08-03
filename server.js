const express = require("express");
const monk = require("monk");

const dbUrl = "mongodb://127.0.0.1:27017/dailyplanner";

const app = express();
const port = process.env.port || 3000;

monk(dbUrl).then(database => {
	require("./routes/list")(app, database);
	require("./routes/tasks")(app, database);
	app.listen(port, () => console.log(`connected to port ${port}`));
});
