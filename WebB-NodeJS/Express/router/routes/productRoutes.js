const express = require('express');
const productRouter = express.Router();
const products = [
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Smartphone", price: 499.99 },
];
productRouter.get('/', (req, res) => {
    res.json(products);
});

productRouter.get('/:id', (req, res) => {
    res.send({ message: `Product with ID ${req.params.id}` });
});

productRouter.post('/:id', (req, res) => {
    res.send({ message: `Product created` });
});

productRouter.delete('/:id', (req, res) => {
    res.send({ message: `Product deleted` });
});

module.exports = productRouter;