// Vemos abaixo uma forma de tratar erros com o try-catch.
// O finally sempre sera executado mesmo dando erro ou não.

function sum(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        throw Error("sum aceita somente números");
    }
    return n1 + n2;
}

let soma = "";
try {
    soma = sum(5, "a");
} catch (e) {
    console.log("Ocorreu um erro");
    console.log(e.message);
} finally {
    console.log("bloco finaly")
}
console.log("fim do programa");