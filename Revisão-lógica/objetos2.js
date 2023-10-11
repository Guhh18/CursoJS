const pessoa = {
    nome: "Gustavo",
    idade: 18,
    email: "gustavo123@gmail.com"
}

console.log(pessoa);

for(let propriedadeObj in pessoa){
    console.log(propriedadeObj);
    console.log(pessoa[propriedade]); //<-- dessa maneira podemos ver todos os valores de um objeto
}

