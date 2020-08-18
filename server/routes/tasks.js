const bodyParser = require("./bodyParser");

module.exports = function(app, db) {
    const collection = db.get("tasks");

    app.post("/getTasks", bodyParser.jsonParser, (req, res) => {
        collection.find({ elemId: req.body.elemId }).then(data => res.send(data));
    });

    app.post("/createNewTask", bodyParser.jsonParser, req => {
        collection.insert(req.body.task);
    });

    app.post("/checked", bodyParser.jsonParser, req => {
        collection.update(
            { id: req.body.id },
            {
                $set: {
                    checked: req.body.checked,
                    checkboxClass: req.body.checkboxClass
                }
            }
        );
    });

    app.post("/changeTask", bodyParser.jsonParser, req => {
        collection.update({ id: req.body.id }, { $set: { text: req.body.text } });
    });

    app.post("/deleteTask", bodyParser.jsonParser, req => {
        collection.remove({ id: req.body.id });
    });
};
