const express = require("express");
const helmet = require("helmet");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const config = require("./src/config/config");
require('./src/config/db');

const app = express();
const PORT = AppConfig.PORT || 4444;

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(bodyparser.json);
app.use(bodyparser.urlencoded({
    extended: true
}))


app.listen((PORT) => {
    console.log(`Successfully Connected At PORT : ${PORT}`);
})