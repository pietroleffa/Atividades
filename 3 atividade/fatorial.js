var  readlineSync = require('readline-sync');

function fatorial(n) {
    if (n == 1 ) return 1;
    console.log("Fatorial de " + n + " = " + n + " * !(" + (n -1));
    return n * fatorial(n - 1); 
}

var numero = readlineSync.question('Qual é o seu numero?');
console.log(fatorial(numero));