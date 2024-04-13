const express = require('express');
const router = express.Router();
const employees = require('../model/postdata');
const jwt = require('jsonwebtoken')
router.use(express.json())

function verifyToken(req, res, next) {
    try {
        const token = req.headers.token;
        if (!token) {
            throw 'Unauthorized Access';
        }
        let payload = jwt.verify(token, 'reactblogapp');
        if (!payload) {
            throw 'Unauthorized Access';
        }
        next();
    } catch (error) {
        res.status(401).send(error); 
    }
}

// POST request
router.post('/add',verifyToken, async (req, res) => {
    try {
        const post = req.body;
        const data = await employees(post).save(); 
        res.status(200).send({ message: "Employee Added" })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ error: "An error occurred while adding employee" });
    }
});

// GET request
router.get('/employees',verifyToken, async (req, res) => {
    try {
        const allEmployees = await employees.find(); 
        res.status(200).send(allEmployees);
        console.log("All posts:", allEmployees);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "An error occurred while fetching posts" });
    }
});

//GET Request using a specific ID
router.get('/employees/:id', verifyToken, async (req, res) => { 
    try {
      const post = await employees.findById(req.params.id);
      res.json(post);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

//UPDATE Employee
router.put('/employees/:id', verifyToken, async (req, res) => {
    try {
      const updatedEmployee = await employees.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedEmployee) {
        return res.status(404).json({ error: 'Employee not found' });
      }
      res.json({ message: 'Employee updated successfully', data: updatedEmployee });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  //DELETE
  router.delete('/employees/:id', verifyToken, async(req, res) => {
    try {
        const deleteEmployee = await employees.findByIdAndDelete(req.params.id);
        if (!deleteEmployee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.json({ message: 'Employee deleted successfully', data: deleteEmployee });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET Request to retrieve details of a specific employee using their ID
router.get('/employees/:id/view', verifyToken, async (req, res) => {
    try {
        const employee = await employees.findById(req.params.id);
        res.status(200).send(employee);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "An error occurred while fetching employee details" });
    }
});

module.exports = router;