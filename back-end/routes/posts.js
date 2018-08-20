const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Post = require('../models/Post.js');

router.get('/',(req,res)=>{
    res.json({"message":"This is the page for all the posts"})
})

module.exports = router ;
