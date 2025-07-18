export function logger(req, res, next) {
  // Obtener timestamp actual en formato ISO para mejor legibilidad
  const time = new Date().toISOString();

  // Registrar información de la petición en consola
  // Formato: [timestamp] MÉTODO URL
  console.log(`[${time}] ${req.method} ${req.url}`);

  // Llamar a next() para pasar el control al siguiente middleware
  // Sin esto, la petición se quedaría "colgada"
  next();
}