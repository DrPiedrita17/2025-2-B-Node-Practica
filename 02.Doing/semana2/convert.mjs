import inquirer from "inquirer";
import chalk from "chalk";
import boxen from "boxen";
import { convertCelsiusToFahrenheit, convertFahrenheitToCelsius } from "./temperatura.js";

function iniciar(){
    inquirer.prompt([
    {
        type: "list",
        name: "opcion",
        message: "Que tipo de conversión desea realizar?",
        choices:["celsius a fahrenheit", "fahrenheit a celsius"],
    },
    {
        type: "input",
        name: "grados",
        message: chalk.blue("Ingrese el valor a convertir:"),
    }
]).then(res => {
    const {tipo, grados} = res;
    let resultado = 0;
    let mensaje = "";
    
    if (tipo === "celsius a fahrenheit") {
        if (grados < -273.15) {
            console.log(chalk.red("La temperatura no puede ser menor que -273.15 grados Celsius"));
            return;
        }else{
            resultado = convertCelsiusToFahrenheit(grados).toFixed(1);
            mensaje = `${grados} grados Celsius son ${resultado} grados Fahrenheit`;
            mostrarResultado(mensaje);
        }
    }
    else {
        if (grados < -459.67) {
            console.log(chalk.red("La temperatura no puede ser menor que -459.67 grados Fahrenheit"));
            return;
        }
        resultado = convertFahrenheitToCelsius(grados).toFixed(1);
        mensaje = `${grados} grados Fahrenheit son ${resultado} grados Celsius`; 
        mostrarResultado(mensaje);
    } 
    repetir();   
});
}

function mostrarResultado(mensaje){
    console.log(
        chalk.bgHex("686863").bold(boxen(mensaje, {
        padding: 1, margin: 1, borderStyle: "double",})));
}

function repetir(){
    inquirer.prompt([
        {
            type: "confirm",
            name: "repetir",
            message: chalk.blue("¿Desea realizar otra conversión?"),
            default: true,
        }
    ]).then(res => {
        if (res.repetir) {
            iniciar();
        } else {
            console.log(chalk.green("Gracias por usar el conversor de temperatura!"));
        }
    }
    );
}

iniciar();


