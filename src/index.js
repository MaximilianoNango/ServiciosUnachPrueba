import express from 'express';
import path from 'path';
import {productosRoutes, usersRoutes, registersRoutes, apiserviciosRoutes} from './routes/index.js';
//import productosRoutes from './routes/products.routes.js';
//import registrationsRoutes from './routes/registers.routes.js';
//import usersRoutes from './routes/users.routes.js';

const app = express()

app.use(express.static('src'));
app.use("/productos", productosRoutes);
app.use("/users", usersRoutes);
app.use("/registers", registersRoutes);
app.use("/api", apiserviciosRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.resolve('src/index.html'));
});

app.listen(3000,()=> {
console.log("server", 3000)
});