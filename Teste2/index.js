function isFibonacci(number) {
    let a = 0, b = 1, c = 0;
  
    if (number === 0 || number === 1) return true;
  
    while (c < number) {
      c = a + b;
      a = b;
      b = c;
  
      if (c === number) return true;
    }
  
    return false;
  }
  
  const inputNumber = 21;
  if (isFibonacci(inputNumber)) {
    console.log(`${inputNumber} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${inputNumber} não pertence à sequência de Fibonacci.`);
  }