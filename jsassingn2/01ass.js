function createUniqueCounter() {
    let count = 0;

    function incrementCounter() {
        count++;
        return count;
    }

    function getvalue() {
        return count;
    }

    return {
        incrementCounter,
        getvalue
    };
}

const counterA = createUniqueCounter();
console.log(counterA.incrementCounter()); // 1
console.log(counterA.incrementCounter()); // 2

const counterB = createUniqueCounter();
console.log(counterB.incrementCounter()); // 1
