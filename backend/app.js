const express = require('express');
const cors = require('cors');
const app = express();
const controller = require('./controller');

app.use(cors());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.get('/users', (req, res) => {
    controller.getUsers((req, res, next) => {
        res.send(users);
    });
});

app.post('/createuser', (req, res) => {
    controller.addUser(req.body, (callback) => {
        res.send();
    });
});

app.post('/updateuser', (req, res) => {
    controller.updateUser(req.body, (callback) => {
        res.send(callback);
    });
});

app.post('/deleteuser', (req, res) => {
    controller.deleteUser(req.body, (callback) => {
        res.send(callback);
    });
});

module.exports = app;
