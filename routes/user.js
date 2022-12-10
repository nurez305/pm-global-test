const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const validateUser = require('../util/user')
const User = require('../model/userSchema')


router.get('/getusers', async (req, res) => {
  const users = await User.find().sort('name');
  res.status(200).send(users);
});

router.get('/getuser/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
  
    if (!user) return res.status(404).send('The user with the given ID was not found.');
  
    res.status(200).send(user);
  });
  

router.post('/createuser', async (req, res) => {
  const { error } = validateUser(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  let user = new User({
    firstname: req.body.firstname, 
    lastname: req.body.lastname, 
    gender: req.body.gender, 
    date_of_birth: req.body.date_of_birth


});
  user = await user.save();
  res.status(200).send(user);
});




router.put('/update/:id', async (req, res) => {
  const { error } = validateUser(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findByIdAndUpdate(req.params.id, { 
    firstname: req.body.firstname, 
    lastname: req.body.lastname, 
    gender: req.body.gender, 
    date_of_birth: req.body.date_of_birth  }, {
    new: true
  });

  if (!user) return res.status(404).send('The user with the given ID was not found.');
  
  res.status(200).send(user);
});
  

router.delete('/delete/:id', async (req, res) => {
  const user = await User.findByIdAndRemove(req.params.id);

  if (!user) return res.status(404).send('The user with the given ID was not found.');

  res.status(200).send(user);
});



module.exports = router;
