const mongoose = require('mongoose');
const Schema = mongoose.Schema ;
// import moment from 'moment' ;

const PostSchema = new Schema({
   title:{
       type:String,
       required:true,
       maxlength:150,
       minlength:5
   },
   text:{
        type:String,
        required:true,
        maxlength:5000,
        minlength:100
    },
    views:{
        type:Number
    },
    date:{
        type:Date,
        default:Date.now
    },
    category:{
        type:String,
        required:true
    }    
})

module.exports = Post = mongoose.model('post', PostSchema);

