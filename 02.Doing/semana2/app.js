import inquirer from 'inquirer';
import saludar from './saludar.js';
import chalk from 'chalk';
import figlet from 'figlet';



inquirer.prompt([
    {
    type: 'input',
    name: 'nombre',
    message: '¿Cuál es tu nombre?',
},
    {
    
    type: 'input',
    name: 'age',
    message: '¿Cuál es tu edad?',
},
{
    typel: 'list',
    name: 'color',
    message: '¿Cuál es tu color favorito?',
    choices: ['red', 'green', 'blue', 'yellow', 'magenta', 'cyan', 'white', 'black'],
}
]).then(answer => {
    let color = answer.color;
    figlet(answer.nombre, (err, data) => {
        console.log(
            chalk[color](data));
    });
    if (answer.age >= 18) {
        console.log(
            chalk[color](saludar(answer.nombre, answer.age, true)));
    }else {
        console.log(
            chalk[color](saludar(answer.nombre, answer.age, false)));
    }
});