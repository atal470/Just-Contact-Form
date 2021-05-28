const mongoose = require('mongoose');
//Creating a database
mongoose.connect('mongodb://localhost/studentf', 
{useCreateIndex: true,
useNewUrlParser: true, 
useUnifiedTopology:true}).then(()=>{
    console.log("connection successsful");
}).catch((error)=>{
    console.log(error);
});