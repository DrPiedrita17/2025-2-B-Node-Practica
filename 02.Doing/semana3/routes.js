const {responderHTML, responderJSON, responderTXT} = require('./utils/responses');
const fs = require('fs');
const path = require('path');

function manejarRutas(req, res) {
    const { url, method } = req;
    if (url === '/' && method === 'GET') {
        const content = `<h1>Bienvenido al servidor</h1>
            <p>Usa</p>
            <ul>
            <li><a href='/contacto'>Contacto</a></li>
            <li><a href='/conocenos'>Conócenos</a></li>
            <li><a href='/api'>API</a></li>
            </ul>
            `;
    responderHTML(res, content, 200);
    }
    else if (url === '/contacto' && method === 'GET') {
        const content = `<h2>Contacto</h2><p>Escríbenos a contacto@industriaspatito.com</p>`;
        responderHTML(res, content, 200);
    }
    else if (url === '/conocenos' && method === 'GET') {
        const content = `<h2>Conócenos</h2><p>Somos cool</p>`;
        responderHTML(res, content, 200);
    }
    else if (url === '/api' && method === 'GET') {
        const datos = {
            nombre: 'Servidor de mi app cool',
            version: '1.0.0',
            autor: 'Dev Team',
            mensaje: 'Hola desde la API',
        };
    responderJSON(res, datos, 200);
  }
  else if (url === '/equipo' && method === 'GET') {
    fs.readFile(archivo, 'utf8', (err, data) => {
      if (err) {
        responderJSON(res, { error: 'Error al leer el archivo' }, 500);
      } else {
        responderJSON(res, JSON.parse(data), 200);
      }
    });
  }
  else if (url === '/equipo' && method === 'POST') {
  }
  else {
    responderTXT(res, 'Página no encontrada', 404);
  }
}
module.exports = { manejarRutas };
