const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
let cors = require('cors');
const { db } = require("./config/db");
const bodyParser = require("body-parser");


/* PROJECT ROUTES */
const projectRoutes = require("./routes/projects");

/* MIDDLEWARES */
app.use( cors() );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", projectRoutes );











// app.listen( process.env.PORT, () => { db.connect() } );
app.listen( process.env.PORT, () => { db.connect() } );



