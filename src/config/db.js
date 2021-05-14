const mongoose = require("mongoose");


mongoose.Promise = global.Promise; //Necessary condition using ES6

const option = {
    useUnifiedTopology: true,
    useNewUrlParser: true, 
    useCreateIndex: true
}

//Creating Connection with DB own on local otherwise URL
mongoose.connect(AppConfig.DB_URI, option);

//Handling the error
mongoose.connection
    .once('open', () => 
    console.log(`Successfully Connected to DataBase At ${AppConfig.DB_URI}`)
    )
    .on('error', (error) => {
        console.log("Error Meessage is :", error);
    })