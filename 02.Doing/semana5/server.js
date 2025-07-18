import express from 'express';
import { logger } from './src/middlewares/logger.js';
//import { parseQuery } from './src/middlewares/parseQuery.js';
//import usersRoutes from './src/routes/usersRoutes.js';
//import { productsRouter } from './src/routes/productsRoutes.js';
import { loadData } from './src/storage.js';
// import { usersRouter } from '../semana4/src/routes/usersRoutes.js';

const PORT = 3000;

await loadData();

const app = express();

app.get('/:name', logger, (req, res) => {
    if (req.query.isAdmin === 'true') {
        res.send(`Hola Admin ${req.params.name} a tu API`);
    }
    else{
        res.end('Hola ' + req.params.name);
    }
});

//app.use('/api', usersRoutes);

app.get('/saludo/:nombre', logger, (req, res) => {
    const {nombre} = req.params;
    res.json({
        message: `Hola ${nombre}, bienvenido a la API`
    });
});

app.get('/api/edad', logger, (req, res) => {
    const anio = parseInt(req.query.anioNacimiento);
    const actual = new Date().getFullYear();
    
    if (!anio || anio > actual || isNaN(anio)) {
        res.status(400).json({
            error: 'Año de nacimiento inválido. Por favor, proporciona un año válido.'
        });
    }
    const edad = actual - anio;
    res.json({
        anioNacimiento: anio,
        edad,
    });
});

app.get('/suma/:a/:b', logger, (req, res) => {
    const {a, b} = req.params;
    const suma = parseInt(a) + parseInt(b);
    //const suma = Number(a) + Number(b);

    if (isNaN(suma)) {
        return res.status(400).json({
            error: 'Los parámetros deben ser números válidos.'
        });
    }

    res.json({
        resultado: suma
    });
});

app.get('/api/buscar', logger, (req, res) => {
    const {producto,categoria} = req.query;
    if (!producto || !categoria) {
        return res.status(400).json({
            error: 'Parámetros de búsqueda incompletos. Por favor, proporciona producto y categoría.'
        });
    }
    res.json({
        busqueda: producto,
        categoria: categoria,
        mensaje: `Resultados de búsqueda para ${producto} en la categoría ${categoria}`
    });
});

app.get('/perfil/:usuario', logger, (req, res) => {
    const {usuario} = req.params;
    const lang = req.query.lang;

    let mensaje = `Welcome ${usuario}`;
    if (lang === 'es') {
        mensaje = `Bienvenido ${usuario}`;
    } else if (lang === 'fr') {
        mensaje = `Bienvenue ${usuario}`;
    }

    res.json({
        mensaje,
        lenguage: lang || 'default',
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});