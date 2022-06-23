const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

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

app.listen(3000, () => console.log('Server running'));