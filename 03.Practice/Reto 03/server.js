import http from "http";
import { invertirCadena, validarPal } from "./utils/invertir.js";

function validarNumLet(texto){
  return /^[a-zA-Z0-9]+$/.test(texto);
}

const server = http.createServer((req, res) => {
  // TODO : Manejar las rutas y peticiones
  const { method, url } = req;
  
  if (url === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>Bienvenido al servidor</h1> 
      <p>Usa</p>
            <ul>
            <li><a href='/invertir'>Invertir</a></li>
            <li><a href='/palindromo'>Palindromo</a></li>
            </ul>
      `);
  } else if (req.url.startsWith('/invertir') && method === "GET") {
    const urlInv = new URL(req.url, `http://${req.headers.host}`);
    const texto = urlInv.searchParams.get("texto");
    if (!texto) {
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("Falta el parámetro 'texto' en la URL");
    } 
    
    else {
      if (!validarNumLet(texto)) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Solo puede conterner letras y números");
      } else{
        const textoInvertido = invertirCadena(texto);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(textoInvertido));
      }  
    }

  } 

  else if (req.url.startsWith('/palindromo') && method === "GET"){
    const urlPal = new URL(req.url, `http://${req.headers.host}`);
    const texto = urlPal.searchParams.get("texto");
    if (!texto) {
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("Falta el parámetro 'texto' en la URL");
    } 

    else {
      if (!validarNumLet(texto)) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Solo puede conterner letras y números");
      } else{
        const textoPalindromo = validarPal(texto);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(textoPalindromo));
      }  
    }
  } 

  else{
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Página no encontrada");
  }

});

server.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
// TODO : Escuchar en el puerto 3000