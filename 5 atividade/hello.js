var  readlineSync = require('readline-sync');

var nome = readlineSync.question('Qual é o seu numero?');
console.log('01 ' + nome + '!');

// EXPRESSÃO REGULAR
var str = "123456789";
var p = /[^5-7]/g;
var resultado = str.match(p);
console.log("RESULTADO = " + resultado);

// (p)= padrão (^)= negação [^5-7]= não quer 5 e 7
// se tirar o (^)= ele vai querer só os 5 6 7 que seria entre 5-7