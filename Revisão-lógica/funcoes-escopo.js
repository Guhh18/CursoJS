let n = "global";

function mostraN() {
  let n1 = "n1 local";

  if (true) {
    var n2 = "n2 dentro de if com var";
  }
  console.log(n2);
  console.log(`valor de n1: ${n1}`);
  console.log(`valor de n2: ${n2}`);
}
mostraN();

console.log(`valor de n no escopo global: ${n}`);

// var e const geram um escopo de bloco
// *var gera um escopo de função*

function fnExt() {
  let n = "local na função fnExt";

  function fnInt() {
    n = "local na função fnInt";
    console.log(n);
  }
  
  fnInt();
  console.log(n);
}

fnExt();
