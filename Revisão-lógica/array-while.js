//Criar um array com números randomicos não repetidos
// Na função criada abaixo usamos o metodo Math.random() que inicialmente cria um número randomico entre 0 e 1, podemos passar um parâmetro pra esse método que define até que número ele deve sortear (Math.random() * 50 sorteia um número aletório entre 1 e 50).   
// Passando o parâmetro "max" pra esse método, ao chamar essa função e atribuirmos um número à ela (que no caso é o número maximo/limite dos números aleatórios que você deseja sortear), esse número vai se tornar o número maximo do sorteio (generateRandomInteger(50)).
// O método indexOf serve para retornar o íncide de um elemento expecífico de uma array ou de todos os elementos da arr. O if no meio do loop serve para verificar se um número já existe na array. O indexOf retorna o valor -1 caso o número não exista na array, caso contrário ele retorna o índice do valor

function generateRandomInteger(max) {
    return parseInt(Math.random() * max);
}

let arr = [];

while (arr.length <= 20) {
    let randomNumber = generateRandomInteger(50);


    if (arr.indexOf(randomNumber) < 0) {
        arr.push(randomNumber);
    } else {
        console.log(randomNumber, "ja existe");
    }

}
console.log(arr);