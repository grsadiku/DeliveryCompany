const express = require('express');
const Order = require('../model/Orders');
const {raw} = require("express");

const router = express.Router()

router.get("/",  async (req, res) => {
    const orders = await Order.find();
    res.status(200).json(orders)
});

router.get("/:idOrder", (req, res) => {
    console.log("Order here");
})

router.post("/", async (req, res) => {
    const order = new Order({
        IdEntryUser : req.body.IdEntryUser,
        Description : req.body.Description,
        Price : req.body.Price,
        AddressFrom : req.body.AddressFrom,
        AddressTo : req.body.AddressTo
    })
    console.log(req.body)
    try{
        const savedOrder = await order.save();
        res.status(200).json(savedOrder);
    }catch (err){
        res.status(500).json(err);
    }
})

router.delete("/:idOrder", (req, res) => {
    console.log("Order here");
})

router.patch("/:idOrder", (req, res) => {
    console.log("Order here");
})

module.exports = router;