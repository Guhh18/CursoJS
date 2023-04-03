// % - Resto da divisão
// ** - Potência

let n1 = 10;
let n2 = 5;
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log(2 ** 3);


// OPERADORES DE ATRIBUIÇÃO


let n3 = 20;
// n3 = n3 + 15; Uma forma de atribuir valor à uma variável.
n3 += 2; //Outra forma simplificada de atribuir esse mesmo valor
console.log(n3);

//Esse método pode ser usado com todos os operadores matemáticos: -=, *=, /=, %= e **=


// INCREMENTO E DECREMENTO

let i = 0;
console.log(++i);
console.log(i--);
console.log(i);

// Dependendo de onde colocamos os operadores de incremento/decremento podemos mudar a ordem na qual os valores são atribuidos as variáveis.



// COMPARAÇÃO
/*
    igualdade de valor ==
    igualdade de valor e tipo ===
    <, >, <=, >=
    != Valores diferentes
    !== Valores e tipos diferentes
*/

n1 = 10;
n2 = 5;
n3 = 27;
console.log(n1, n2, n3);
console.log(n1 != "10");
console.log(n1 !== "10");


// OPERADORES LÓGICOS

/*
Para uma pessoa viajar para o exterios:
-- Precisa ser maior de 18 anos 
OU
-- Ir acompanhada dos pais
E
-- Ter comprado bilhete
*/

let idade = 16;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = comprouBilhete && idade >= 18 || paisPresentes;
console.log(`pode viajar: ${podeViajar}`);
console.log((3 * 2) ** 2);

// Em operações matemáticas diversas é sempre importante lembrar da prescedencia de operadores.
 