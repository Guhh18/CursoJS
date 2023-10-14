const pessoas = [
    {
        nome: "Daniel",
        idade: 18,
    },
    {
        nome: "Camila",
        idade: 25,
    },
    {
        nome: "Gustavo",
        idade: 19,
    },
    {
        nome: "Manu",
        idade: 17,
    },
];

// console.log(pessoas);
// console.log(pessoas[0].nome);

//Exercicio mostrar os valores dos objetos dentro da array:

for(let n = 0; n < pessoas.length; n++){
    console.log(`o nome é ${pessoas[n].nome} e a idade é ${pessoas[n].idade}`);
}