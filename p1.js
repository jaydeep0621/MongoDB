const mongoose = require("mongoose");


mongoose.Promise = global.Promise; //Necessary condition using ES6


//Creating Connection with DB own on local otherwise URL
mongoose.connect("mongodb://localhost/student",{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex:true});

//Handling the error
mongoose.connection
    .once('open',() => console.log("Connected"))
    .on('error',(error)=> {
        console,log("Error Meessage is :", error);
    })