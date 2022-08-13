const express = require('express');
const Users = require('../model/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get("/", async (req, res) => {
    try{
        const users = await Users.find();
        res.json(users);
    }catch (err){
        res.status(500).json(err);
    }
});

router.get("/register", async (req, res) => {
    try{
        const { firstName,
            lastName,
            email,
            username,
            password,
            IDMunicipality,
            municipality} = req.body;

        if(!(firstName && lastName && email && username && password && IDMunicipality && municipality)){
            res.status(400).json("Te gjitha inputet jane te nevojshme");
        }

        const validateEmail = await Users.findOne({ email });
        const validateUsername = await Users.findOne({ username });

        if (validateUsername){
            res.status(409).json("Ky perdorues ekziston ne databaze");
        }
        if(validateEmail){
            res.status(409).json("Kjo email ekziston");
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const user = await Users.create({
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Password: encryptedPassword,
            Username: username,
            IDRole: 2,
            IDMunicipality: IDMunicipality
        });

        const token = jwt.sign(
            {user_id: user.user_id, email},
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h"
            }
        );

        user.Token = token;
    }catch (err) {
        res.status(500).json(err);
    }
});

router.get("/login", async (req, res) => {

    try{
        const {username, password} = req.body;
        if(!(username, password)){
            res.status(400).send("Inputet duhet te plotesohen");
        }
        const user = await Users.findOne({username});

        if(user && (await bcrypt.compare(password, user.password))){
            const token =jwt.sign(
                {user_id: user.user_id, username},
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h"
                }
            )

            user.token = token;
            res.status(200).json(user);
        }

    }catch (err){

    }
});