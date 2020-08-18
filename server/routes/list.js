const bodyParser = require("./bodyParser.js");

module.exports = function(app, db) {
    const collection = db.get("list");

    app.get("/getList", (req, res) => {
        collection.find({}).then(data => res.send(data));
    });

    app.post("/addNewElement", bodyParser.jsonParser, (req, res) => {
        const data = {
            taskName: req.body.taskName,
            id: req.body.id,
            className: "listElement"
        };
        collection.insert(data);
    });

    app.post("/changeListElem", bodyParser.jsonParser, req => {
        collection.update({ id: req.body.id }, { $set: { taskName: req.body.taskName } });
    });

    app.post("/deleteListElem", bodyParser.jsonParser, req => {
        collection.remove({ id: req.body.id });
        db.get("tasks").remove({ elemId: req.body.id });
    });
};
