//table
const mongoose =require('mongoose');

const dataSchema=new mongoose.Schema({
    data:{
        type:Array,
        require:true,
        
    }
});


//we have created the table now we will export this table


module.exports=mongoose.model('data',dataSchema)