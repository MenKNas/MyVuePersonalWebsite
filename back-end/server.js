const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");

const posts = require('./routes/posts');
const app = express();

//body parser config
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.json({"message":"Hello"})
})

app.use('/posts',posts);

app.post("/send",(req,res)=>{
    console.log(req.body);
})  

app.listen(8000,() => {
    console.log('Server up and running ! ')
});