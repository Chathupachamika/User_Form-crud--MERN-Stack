const User = require('./model');

const getUsers = (req, res, next) => {
    User.find()
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ message: error })
        })
};

const addUser = (req, res, next) => {
    const newUser = new User({
        id: req.body.id,
        name: req.body.name,
        email:req.body.email,
        });
        newUser.save();
        res.status(201).json({ message: "User added successfully", newUser });
}

const updateUser = (req, res, next) => {
    const { id, name, email } = req.body;
    User.updateOne({ id: id }, { $set: { name: name, email: email } })
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
}

const deleteUser = (req, res, next) => {
    const id = req.body.id;
    User.deleteOne({ id: id })
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
}

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;