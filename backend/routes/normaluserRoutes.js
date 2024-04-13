const express = require('express');
const router = express.Router();
const UserModel = require('../model/user');

router.use(express.json())

router.post('/signup', async (req, res) => {
    try {
        const userData = req.body;
        const newUser = await UserModel.create(userData); 
        res.status(200).send({ message: "User Added" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: "An error occurred while adding user" });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await UserModel.findOne({ username });
        if (!user) {
            return res.json({ message: "User not found" });
        }
        
        if (user.password === password) {
            return res.json({ message: "User Login success" });
        } else {
            return res.json({ message: "Invalid User Login" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "An error occurred while processing login" });
    }
});
  
module.exports = router;
