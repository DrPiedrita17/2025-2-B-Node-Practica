import express from "express";
import {
  separarParesImpares,
  validarNumeros,
} from "./utils/separarParesImpares.js";
import { logger } from "./middlewares/logger.js";

const app = express();
const PORT = 3000;

app.get("/", logger, (req, res) => {
    res.setHeader("Content-Type", "text/HTML");
    res.end(`<!DOCTYPE html>
            <html lang="es">
            <h1>Bienvenido al servidor de pares e impares</h1>
            <ul>
            <li>
            <a href="/filtrar?numeros=1,2,3,4,5">Filtrar números pares e impares</a>
            </li>
            <ul>`
        );
});

app.get("/filtrar", logger, (req, res) => {
  // Validar que el parámetro existe
    const numeros = req.query.numeros;
    if (!numeros) {
        return res.status(400).json({
            error: "El parámetro 'numeros' es requerido."
        });
    }
  // Convertir string a array
    const numerosArray = numeros.split(",").map(Number);
  // Validar que todos sean números
    const validacion = validarNumeros(numerosArray);
    if (!validacion.isValid) {
        return res.status(400).json({
            error: validacion.error || "Todos los valores deben ser números válidos."
        }); 
    }
  // Convertir a números
  // Separar pares e impares
    const { pares, impares } = separarParesImpares(numerosArray)
  // Respuesta exitosa
    res.json({
        pares,
        impares,    
    });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});