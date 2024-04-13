const express = require('express');
const router = express.Router();
const employees = require('../model/postdata');

router.use(express.json())

router.get('/employees', async (req, res) => { 
    try {
      const allEmployees = await employees.find(); 
      res.status(200).send(allEmployees);
      console.log("All employees:", allEmployees);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "An error occurred while fetching employees" });
    }
  });

module.exports = router; 