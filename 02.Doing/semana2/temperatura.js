export function convertCelsiusToFahrenheit(temperature) {
    if (typeof temperature !== 'number') {
        throw new Error('Input must be a number');
    }
    return (temperature * 9/5) + 32;
}

export function convertFahrenheitToCelsius(temperature) {
    if (typeof temperature !== 'number') {
        throw new Error('Input must be a number');
    }
    return (temperature - 32) * 5/9;
}

//module.exports = {
//convertCelsiusToFahrenheit,
//convertFahrenheitToCelsius
//};