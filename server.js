const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const morgan = require('morgan');
// const dotenv = require('dotenv');
require('dotenv').config();
const app = express();
const { readdirSync } = require('fs')
const connectDB = require('./config/db')


//middleware
app.use(morgan("dev"));
app.use(bodyparser.json({limit:'20mb'}));
app.use(cors());

connectDB();
//#2
readdirSync('./routes').map((r) => app.use('/api', require("./routes/"+r)));



const port = process.env.PORT
app.listen(port, ()=>{
    console.log('server is running' + port)
});