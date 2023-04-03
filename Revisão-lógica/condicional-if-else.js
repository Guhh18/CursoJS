let idade = 16;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = comprouBilhete && idade >= 18 || paisPresentes;
console.log(`pode viajar: ${podeViajar}`);

if(!comprouBilhete){
    console.log("Não comprou o bilhete");
}else{
    if(idade >= 18){
        console.log("É maior de idade, pode viajar");
    }else{
        console.log("É menor de idade");
    }
}


 let n1 = 5;
 let n2 = 8;
 let media = (n1 + n2) / 2;

 if (n1 == 0 || n2 == 0){
    console.log(`Aluno reprovado, media: ${media}`);
 } else if (media >=4 && media < 7){
    console.log (`Aluno em recuperação, media: ${media}`);
 } else{
    console.log(`Aluno aprovado, media: ${media}`);
 }