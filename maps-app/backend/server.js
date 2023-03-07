const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const routesUrl = require('./routes/routes')
const cors = require('cors');


mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://padu:hijosdeputa1.@cluster0.phvpmkp.mongodb.net/mapElements?retryWrites=true&w=majority', () => {
    console.log("Database connected")
}) 

app.use(express.json()) //Hemos activado el body.parser 
app.use(cors());
app.use('/app', routesUrl)
app.listen(4000, () => console.log("Server is running"));

