function encontrarMayor(texto){
    if (!texto) {
        return 'Error: Debes enviar un parámetro "numbers" con una lista de números.';
    }
    const numeros = texto.split(',').map(Number);
    const mayor = Math.max(...numeros); 
    return mayor;
}

export { encontrarMayor };