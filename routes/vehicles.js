const express = require('express');
const Vehicle = require('../model/Vehicle');

const router = express.Router();

router.get("/", async (req, res) => {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
})

router.get("/:id", async (req, res) => {
    const vehicle = await Vehicle.findById(req.params.id)
    console.log(vehicle);
    res.status(200).json(vehicle);
});

router.post("/", async (req, res) => {
    const vehicle = new Vehicle({
        ChassisNumber: req.body.chassisNumber,
        Make: req.body.make,
        Model: req.body.model,
        YearOfProduction: req.body.yearOfProduction,
        IDEntryUser: req.body.idEntryUser
    });
    console.log(req.body);
    try {
        const savedVehicle = await vehicle.save();
        res.status(200).json(savedVehicle);
    }catch (err){
        res.status(500).json(err);
    }
});

router.delete("/:id", (req, res) => {
    console.log("Vehicle here");
})

router.patch("/:id", (req, res) => {
    console.log("Vehicle here");
});

module.exports = router;