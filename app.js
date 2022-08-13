const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const ordersRoute = require("./routes/orders");
const invoiceRoute = require("./routes/invoices");
const vehicleRoute = require("./routes/vehicles");
const roleRoute = require("./routes/roles");
const bodyParser = require('body-parser');

const app = express();

app.listen(3000);
app.use(bodyParser.json());
app.use("/orders", ordersRoute);
app.use("/invoice", invoiceRoute);
app.use("/role", roleRoute);
app.use("/vehicle", vehicleRoute);


mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, ()=>{
    console.log("Connected to DB")
});