const express = require('express');
const Role = require('../model/Role');


const router = express.Router();

router.get("/", async (req, res) => {
    const role = await Role.find();
    res.status(200).json(role);
});

router.get("/:id", async(req, res) => {
    const role = await Role.findById(req.params.id)
    console.log(role);
    res.status(200).json(role);
});

router.post("/", async (req, res) => {
    const role = new Role({
        Title: req.body.title
    })
    console.log(req.body);
    try {
        const savedInvoice = await role.save();
        res.status(200).json(savedInvoice);
    }catch (err){
        res.status(500).json(err);
    }
});

router.delete("/:id", (req, res) => {
    console.log("Invoice here");
})

router.patch("/:id", (req, res) => {
    console.log("Invoice here");
});

module.exports = router;
