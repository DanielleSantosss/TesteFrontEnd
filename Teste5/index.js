function inverterString(string) {
    let stringInvertida = "";
  
    for (let i = string.length - 1; i >= 0; i--) {
      stringInvertida += string[i];
    }
  
    return stringInvertida;
  }
  
  const inputString = "Exemplo";
  console.log("String invertida:", inverterString(inputString));