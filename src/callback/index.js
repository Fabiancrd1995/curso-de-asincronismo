// suma
function sum (num1, num2) {
    return num1 + num2;
}

function calc (num1, num2, sumar) {
    return sumar (num1, num2);
}

console.log(calc(2, 2, sum));



// hola JavaScript
setTimeout (function () {
    console.log('hola JavaScript');
},2000)



// hola Oscar
function grettin (name) {
    console.log(`hola ${name}`);
}

setTimeout(grettin, 2000, 'Oscar');