
export function invertirCadena(texto) {
  const invertido = texto.split("").reverse().join(""); 
      return {
        original: texto,
        invertido: invertido,
      }
  }

export function validarPal(texto) {
  const invertido = texto.split("").reverse().join(""); 
  if (texto === invertido) {
    return {
      palindromo: true,
    }
  } else {
    return {
      palindromo: false,
    }
  }
}