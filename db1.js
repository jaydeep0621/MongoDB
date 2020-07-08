const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const student = new Schema({
    Name :{
        type : String,
        required : true
    }
});

const studentschema  = mongoose.model("student", student);

module.exports = studentschema;