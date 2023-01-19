function criptografar() {
  var input = document.getElementById("input");
  var texto = input.value;
  var palavra = "";

  for (let i = 0; i < texto.length; i++) {
    var element = texto[i];
    if (element === "e") {
      element = "enter";
      palavra += element;
    } else if (element === "i") {
      element = "imes";
      palavra += element;
    } else if (element === "a") {
      element = "ai";
      palavra += element;
    } else if (element === "o") {
      element = "ober";
      palavra += element;
    } else if (element === "u") {
      element = "ufat";
      palavra += element;
    } else {
      palavra += element;
    }
  }
  alert(palavra);
}
