const router = require("express").Router(); //Create constant router, import express
const Film = require("../models/film"); //Import database model 

router.get("/", (req, res) => {  //Request GET in route
    Film.find((err, result) => { //Search all documents in the films collection
        if(err) throw new Error(err); //Enable conditional on error
        res.json(result); //Returns the results in JSON format.
    });
});

router.post("/", (req, res) => { //Request POST in route
    Film.create(req.body, (err, result) => { //Create a new document in the collection
        if(err) throw new Error(err); //Enable conditional on error
        res.json(result); //Returns the results in JSON format.
    });
});

router.put("/:id", (req, res) => { //Request PUT in route
        if(err) throw new Error(err); //Enable conditional on error
    Film.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => { //Search an document by ID in the films collection
        if (err) throw new Error(err); //Enable conditional on error
        res.json(result); //Returns the results in JSON format.
    });
});

router.delete("/:id", (req, res) => { //Request DELETE in route
    Film.findOneAndRemove({ _id: req.params.id }, (err, result) => {//Search an document remove in the films collection
        if(err) throw new Error(err); //Enable conditional on error
        res.end();
    });
});

module.exports = router;  //Export database router