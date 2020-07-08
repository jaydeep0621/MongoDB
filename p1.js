const mongoose = require("mongoose");

mongoose.Promise = global.Promise; //Necessary condition using ES6

mongoose.connect("mongodb://localhost/student",{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex:true});


mongoose.connection
    .once('open',() => console.log("Connected"))
    .on('error',(error)=> {
        console,log("Error Meessage is :", error);
    })