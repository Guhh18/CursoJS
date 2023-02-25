// Mesmo multiplicando um numero por uma string o JS consegue interpretar e fazer a conversão de string para number.
let n1 = "10";

n1 = parseInt(n1) // Variáveis vindas do lado do usuário são recebidas como strings, para resolver isso usamos o parseInt() para transforma-las em number.

// O parseFloat(n1) tambem transformas strings em number só que tras também as casas decimais caso haja.

// O number(n1) consegue analisar se o valor é Int ou Float e fazer a conversão.

let n2 = 2;

console.log(n1 + n2, typeof n1, typeof n2);


// decimais 0 - 9
// hexadecimais 0 - f

// Com o toString() podemos converter números para strings, hexadecimais e binários dependendo do valor atribuido a ele.
let n3 = 5;

n3 = 11;
n3 = n3.toString(16);
console.log(n3, typeof n3);