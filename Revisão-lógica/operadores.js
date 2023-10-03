// % - Resto da divisão
// ** - Potência

let n1 = 10;
let n2 = 5;
console.log(`n1 + n2 = ${n1 + n2}`);
console.log(`n1 - n2 = ${n1 - n2}`);
console.log(`n1 * n2 = ${n1 * n2}`);
console.log(`n1 / n2 = ${n1 / n2}`);
console.log(`n1 % n2 = ${n1 % n2}`);
console.log(`n1 ** n2 = ${n1 ** n2}`);



// OPERADORES DE ATRIBUIÇÃO


let n3 = 20;
// n3 = n3 + 15; Uma forma de atribuir valor à uma variável.
n3 += 2; //Outra forma simplificada de atribuir esse mesmo valor
console.log(n3);

//Esse método pode ser usado com todos os operadores matemáticos: -=, *=, /=, %= e **=


// INCREMENTO E DECREMENTO

let i = 0;
console.log(++i);
console.log(i);
console.log(i--);
console.log(i); 

// Dependendo de onde colocamos os operadores de incremento/decremento (na frente ou atás da variável) podemos mudar a ordem na qual os valores são atribuidos as variáveis. Se observarmos o que acontece na primeira linha podemos perceber que primeiro é atribuído um valor a variável i pois o ++ faz isso antes antes dela ser exibida pelo console.log() e depois ela é exibida com o valor 1, se fosse ao contrário o valor 0 seria exibido primeiro e só depois ele iria somar + 1 ao i.



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
Para uma pessoa viajar para o exterior:
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


// Média
n1 = 6;
n2 = 8;
let media = (n1 + n2) / 2;
console.log(`media: ${media}`);

console.log((3 * 2) ** 2);

// Em operações matemáticas diversas é sempre importante lembrar da prescedencia de operadores ().
 