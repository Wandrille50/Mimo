//Exercice portant sur la création de variables (let, const), leurs valeurs et leur utilisation.

let miles = 24;
let kilometers = 40;
let number = 1.609344;
let kilometersToMiles = kilometers / number;
let milesToKilometers = miles * number;
console.log("Distance conversions");
console.log("--------------");
console.log(kilometers + " " + "kilometers are:");
console.log(kilometersToMiles + " " + "miles");
console.log("----");
console.log(miles + " miles are:");
console.log(milesToKilometers + " kilometers");
console.log("\n");
const celsius = 5;
const fahrenheit = 41;
const celsiusToFahrenheit = (celsius * 9 / 5) + 32;
const fahrenheitToCelsius = (fahrenheit - 32) * 5 / 9;
console.log("Temperature conversions");
console.log("-----------------");
console.log(fahrenheit + " degrees Fahrenheit are:");
console.log(fahrenheitToCelsius + " degrees Celsius");
console.log("---------------");
console.log(celsius + " degrees Celsius are:");
console.log(celsiusToFahrenheit + " degrees Fahrenheit");
