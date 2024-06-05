const express = require('express');
const app = express();

let productos = [];

app.use(express.json());

const defaultProducto = {
    id: 0, 
    nombre: '', 
    precio: 0, 
    minStock: 0, 
    currentStock: 0, 
    maxStock: 0
};

app.get('/productos', function (req, res) {
    console.log(productos);
    res.json(productos);
});

app.post('/productos', function (req, res){
    let data = req.body;
    data.precio = parseFloat(data.precio);
    productos.push({...defaultProducto, ...data});
    res.end();
});

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
})