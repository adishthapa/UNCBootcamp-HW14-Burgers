var burgers = require("../models/burger.js");
var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
    burgers.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burgers.insertOne(["burger_name", "devoured"], [req.body.burger_name, false], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burgers.updateOne({ devoured: true }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});

module.exports = router;