const mongoose= require('mongoose');

const taskSchema= new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    mode:{
        type:String
    }
 

});

const Tasks= mongoose.model('Tasks',taskSchema);

module.exports=Tasks;