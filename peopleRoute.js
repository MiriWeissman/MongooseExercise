'use strict'
const express = require('express');
const router = express.Router();
const peopleModel =require('../models/people');

router.get('/:id',async(req, res) => {
console.log(`this is id in the requirest`, req.params.id)
const personal=await peopleModel.findById(req.params.id).exec();
res.json(personal);
})

router.post('/:id',async(req, res) => {
const personal=await peopleModel.findById(req.params.id).exec();
res.json(personal);
})
router.delete('/:id',async(req, res) => {
const personal=await peopleModel.findById(req.params.id).exec();
res.json(personal);
})
router.put('/:id',async(req, res) => {
const personal=await peopleModel.findById(req.params.id).exec();
res.json(personal);
})
module.exports = router;