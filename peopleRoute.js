'use strict'
const express = require('express');
const router = express.Router();
const peopleModel =require('../models/people');

router.get('/:id',async(req, res) => {
console.log(`this is id in the requirest`, req.params.id)
const personal=await peopleModel.findById(req.params.id).exec();
res.json(personal);
})

router.post('/:id', (req, res) => {
    res.send('person  '+ req.params.id + ' is added ');
})

router.delete('/:id',async(req, res) => {
const personal=await peopleModel.findOneAndRemove(req.params.id).exec();
res.json(personal);
})

router.put('/:id',async(req, res) => {
const personal=await peopleModel.findOneAndUpdate(req.params.id).exec();
res.json(personal);
})

module.exports = router;