let minhaVar = "minha string"
let minhaVar2 = "minha 'string' com aspas dupas"
console.log(minhaVar2);

let minhaVar3 = `Minha template literal`;
console.log(minhaVar3);

let idade = 40;
let msg = `Eu possuo ${idade} anos`;
console.log(msg);

// Verificando os tipos das variáveis com o typeof

console.log(typeof msg,typeof idade);

const n1 = 10;
const n2 = 1.1;
console.log(`O tipo de n1 é ${typeof n1} e o seu valor é ${n1}`);
console.log(`O tipo de n1 é ${typeof n2} e o seu valor é ${n2}`);

// Tipos boolean
const isValid = false;
console.log(`isValid: ${isValid}`)

// Variáveis UNDEFINED são variáveis que foram criadas mas não tiveram um valor atribuido à elas.
// Se quisermos que uma variável seja nula de proposito develos definir elas como NULL: Var1 = null;.
let varTeste;
console.log(varTeste);
console.log(typeof varTeste);

varTeste = 10;
console.log(typeof varTeste, varTeste);

varTeste = null;
console.log(varTeste);

