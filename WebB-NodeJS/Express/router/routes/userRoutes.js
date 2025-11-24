const express = require('express');
const userRouter = express.Router();
const users = [
    { id: 1, username: "alice", role: "user" },
    { id: 2, username: "bob", role: "admin" },
];
userRouter.get('/', (req, res) => {
    res.json(users);
});

userRouter.get('/:id', (req, res) => {
    res.send({ message: `User with ID ${req.params.id}` });
});

userRouter.put('/:id', (req, res) => {
    res.send({ message: `User updated` });
});

userRouter.delete('/:id', (req, res) => {
    res.send({ message: `User deleted` });
});

module.exports = userRouter;