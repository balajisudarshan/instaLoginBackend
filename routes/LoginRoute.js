const route = require('express').Router();
const User = require('../Models/User');

route.post('/login',async(req,res)=>{
    const {name,password} = req.body;
    try {
        const user = await User.create({name,password});
        res.status(201).json({message: "User Logged in  successfully", user});
    } catch (error) {
        res.status(500).json({message: "Error logging in user", error: error.message});
    }
})
route.get('/login',async(req,res)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: "Error fetching users", error: error.message});
    }
})
module.exports = route