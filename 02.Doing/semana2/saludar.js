export default function saludar(nombre, edad, isOld) {
    const msg = isOld ? "Y eres mayor de edad" : "Y eres menor de edad";
    return `Hola ${nombre}, tienes ${edad} años ${msg}`;
}