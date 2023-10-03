// Em uma array podemos colocar qualquer tipo de valor (true, "olá", 0)
// Podemos acessar os valores de uma Array através do seu índice como foi feito abaixo ↓
// Podemos colocar uma array dentro de outra

let arr = new Array();
arr[0] = "Gustavo";
arr[1] = 18;
console.log(arr);

// Como é feito pra acessar um elemento de uma array que esta dentro de outra array usando seus índices:
let arr2 = new Array(true, "Gustavo", 18, new Array("teste", 22));
console.log(arr2[3][1]);
console.log(arr2[3].length);


//Sintaxe literal
//Podemos ver abaixo algumas formas de inserir itens em uma array
const arr3 = ["Gustavo", 18, [3, 6, 9], true];
arr3[4] = "Vlr 1";
arr3[arr3.length] = "Vlr 2";
arr3.push("método push()");
arr3.push("a", "b", "c");


console.log(arr3);

let n = 6;
console.log(arr3[n]);
//podemos usar o valor de uma variável pra acessar um elemento dentro de uma array


