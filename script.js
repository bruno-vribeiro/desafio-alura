
  const input = document.getElementById("input");
  const mensagem = document.getElementsByClassName("div-secundaria img");

  // A letra "e" é convertida para "enter"
  // A letra "i" é convertida para "imes"
  // A letra "a" é convertida para "ai"
  // A letra "o" é convertida para "ober"
  // A letra "u" é convertida para "ufat"

  function btnEncriptar(){
    const texto = encriptar(input.value);
    alert(texto)
    input.value = "";
  }

  function encriptar (stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
    if(stringEncriptada.includes(matrizCodigo[i][0])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
    
    }
    
    return stringEncriptada;
 
  }
  
 

