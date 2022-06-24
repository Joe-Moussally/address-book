require("dotenv").config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRouter = require('./src/user')

const url = 'mongodb://127.0.0.1:27017/address_book';

//connect to db using mongoose
(async () => {
    try {
        await mongoose.connect(url);
        console.log(`MongoDB Connected: ${url}`);
    } catch (err) {
        console.error(err);
    }
})();

const app = express()
app.use(cors())
app.use(express.json());

app.use('/api/user',userRouter)

app.listen(27017, () => console.log('Server running'));