const express = require('express');
const Invoice = require('../model/Invoices');

const router = express.Router()


router.get("/",  async (req, res) => {
    const invoices = await Invoice.find();
    res.status(200).json(invoices)
});

router.get("/:id", (req, res) => {
    const invoice = Invoice.findById(req.params.id)
    console.log(invoice);
    res.status(200).json(invoice);
});

router.post("/", async(req, res) => {
    const invoice = new Invoice({
        IDOrder : req.body.idOrder,
        Price : req.body.price,
        DeliveryPrice : req.body.deliveryPrice,
        TotalAmount: req.body.totalAmount,
        IDEntryUser : req.body.idEntryUser
    });
    console.log(req.body);
    try {
        const savedInvoice = await invoice.save();
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