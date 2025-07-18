import http from 'http';
import { encontrarMayor } from './utils/encontrarMayor.js';
import { logger } from './middlewares/logger.js';
import { parseQuery } from '../../../02.Doing/semana4/src/middlewares/parseQuery.js';

const PORT = 3000;

const server = http.createServer((req, res) => {

  logger(req, res, () => {
    parseQuery(req, res, () => {
      const { pathname, method, query } = req;
      if (pathname === '/' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/HTML' });
    res.end(`<!DOCTYPE html>
        <html lang="es">
        <h1> Bienvenido al servidor de encontrar el mayor número</h1>
        <ul>
        <li>
        <a href="/mayor?numbers=1,2,3,4,5">Encontrar el mayor número</a>
        </li>
        <ul>`
    );

  }

  if (pathname.startsWith('/mayor') && method === 'GET') {
    if (query.numbers){
        return res.end(`El número mayor es: ` + encontrarMayor(query.numbers));
    }
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Error: Debes enviar un query "numbers" con una lista de números.');
  }

    });
  });
});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});