let n;

n = n || 10;

//Usando o operador || no curto circuito mesmo que que o primeiro falor seja false ele irá executar o que é especificado após o ||

console.log(n);

let isValid = false

isValid && console.log("é válido");
isValid || console.log("não é válido");

//O operador && é um operador lógico que retorna trueapenas se ambas as condições envolvidas na expressão são verdadeiras.

//se a primeira condição já for falsa, a expressão inteira é avaliada como false, independentemente do valor da segunda condição. Nesse caso, a segunda condição nem precisa ser avaliada, já que o resultado final já é conhecido. se a primeira condição já for falsa, a expressão inteira é avaliada como false, independentemente do valor da segunda condição. Nesse caso, a segunda condição nem precisa ser avaliada, já que o resultado final já é conhecido. 
