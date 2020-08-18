const express = require("express");
const path = require("path");
const mustacheExpress = require("mustache-express");
const monk = require("monk");

const dbUrl = "mongodb://127.0.0.1:27017/dailyplanner";

const app = express();
const port = process.env.port || 3000;

app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "static")));

monk(dbUrl, (err, database) => {
    if (err) return console.log(err);
    require("./routes/index")(app);
    require("./routes/list")(app, database);
    require("./routes/tasks")(app, database);
    app.listen(port, () => console.log("server start"));
});
