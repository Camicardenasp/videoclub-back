const router = require("express").Router();
const Film = require("../models/film");

router.get("/", (req, res) => {
    Film.find((err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
});

router.post("/", (req, res) => {
    Film.create(req.body, (err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
});

router.put("/:id", (req, res) => {
    Film.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
});

router.delete("/:id", (req, res) => {
    Film.findOneAndRemove({ _id: req.params.id }, (err, result) => {
        if(err) throw new Error(err);
        res.end();
    });
});

module.exports = router;