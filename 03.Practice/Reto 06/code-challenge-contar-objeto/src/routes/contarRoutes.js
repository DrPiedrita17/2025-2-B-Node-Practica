import express from 'express';
import { contarPropiedades } from "../controllers/contarController.js";
import { logger } from '../middlewares/logger.js';

const router = express.Router();

/*router.get('/', logger, (req, res) => {
    res.setHeader("Content-Type", "text/HTML");
    res.end(`<!DOCTYPE html>
            <html lang="es">
            <h1>Bienvenido al servidor de contar propiedades</h1>
            <ul>
            <li>
            <a href="/contar">Contar propiedades</a>
            </li>
            <ul>`
        );
});*/

router.post('/contar', logger, contarPropiedades);

export default router;