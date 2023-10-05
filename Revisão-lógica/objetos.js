// Neste exemplo tentamos buscar o nome e a idade de uma pessoa, mas fazer isso usando arrays pode ser um pouco perigoso devido a frágil estrutura desse codigo que com um pequeno erro na hora de inserir uma informação pode ocasionar em um erro grave como foi feito na array "idades" que, ao invés de um número temos null no lugar que já é o bastante pra quebrar esse código.

// Ex usando array
const nomes = ["Daniel", "Maria", "Joao"];
const idades = [null, 40, 28, 35]
console.log(nomes[0], idades[0]);

// const pessoa = new Object();
// pessoa.nome = "Daniel";
// pessoa.idade = 40;
// console.log(pessoa);

// let prop = "nome";
// console.log(pessoa[prop]);
// console.log(pessoa["idade"]);


const pessoa = {
    nome: "Gustavo",
    idade: 18,
    humorAtual: "Happy Happy Happy",
    estadoMental: "100% insano T-T"
} 
console.log(pessoa.humorAtual);

// Quando temos um grande grupo de informações sobre algo, uma pessoa por exemplo (nome, idade, trabalho etc), talvez tenhamos que buscá-lás e agrupar elas em algum momento e a melhor maneira de fazer isso é usando um objeto ao invés de um array