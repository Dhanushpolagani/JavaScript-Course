function createCounter() {
    let count = 0;
    function incrementCounter() {
      count++;
      return count;
    }
    return incrementCounter;
  }
  
  const counterA = createCounter();
  console.log(counterA()); // 1
  console.log(counterA()); // 2
  
  const counterB = createCounter();
  console.log(counterB()); // 1
  