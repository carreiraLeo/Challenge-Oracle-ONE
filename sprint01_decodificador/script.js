const inputText = document.querySelector(".input textarea");
const outputText = document.querySelector(".output textarea");
const noOutput = document.querySelector(".noOutput");
const buttonCopy = document.querySelector(".output button");

function btnCriptografar() {
  if(inputText.value){
    outputText.style.display = "block";
    const textCriptografar = criptografar(inputText.value, 0);
    outputText.value = textCriptografar;
    buttonCopy.style.display = "block";
    noOutput.style.display = "none";
  }
}

function btnDesriptografar() {
  if(inputText.value){
    outputText.style.display = "block";
    const textCriptografar = criptografar(inputText.value, 1);
    outputText.value = textCriptografar;
    buttonCopy.style.display = "block";
    noOutput.style.display = "none";
  }
}

function copy() {
  navigator.clipboard.writeText(outputText.value);
  inputText.value = "";
  inputText.select();
  outputText.value = "";
  noOutput.style.display = "block";
  buttonCopy.style.display = "none";
  outputText.style.display = "none";
}

function criptografar(text, ctrl) {
  let codigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];

  text = text.toLowerCase();

  for (var i = 0; i < codigo.length; i++) {
    if (text.includes(codigo[i][ctrl])) {
      if (ctrl == 0)
        text = text.replaceAll(codigo[i][ctrl], codigo[i][1]);
      else
        text = text.replaceAll(codigo[i][ctrl], codigo[i][0]);
    }
  }
  return text;
}
