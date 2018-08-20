const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({"message":"It works !! "})
})

module.exports = router ;
