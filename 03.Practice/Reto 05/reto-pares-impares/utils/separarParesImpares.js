export function validarNumeros(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        if (isNaN(numeros[i])) {
            return {
                isValid: false,
                error: `El valor '${numeros[i]}' no es un número válido.`
            };
        }
}
    return { isValid: true };
}

export function separarParesImpares(numeros) {
    const pares = [];
    const impares = [];
    numeros.forEach((numero) => {
        if (numero % 2 === 0) {
            pares.push(numero);
        } else {
            impares.push(numero);
        }
    });
    return { pares, impares };  
}