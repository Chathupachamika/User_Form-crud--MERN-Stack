const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const host = '127.0.0.1';
const mongoose = require("mongoose");
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://chathupachamika:1234@cluster0.iyqjy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to mongodb ...');
    }
    catch (error) {
        console.error('Failed to connect to mongodb', error);
    }
};

connect();

const server = app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});

app.use('/api', router);