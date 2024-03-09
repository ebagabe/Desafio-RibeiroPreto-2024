function fibonacciValidation(numero) {
    let a = 0
    let b = 1;

    while (b < numero) {
        [a, b] = [b, a + b];
    }

    return b === numero;
}

let numeroInformado = 35;

if (fibonacciValidation(numeroInformado)) {
    console.log(`${numeroInformado} pertence à sequência de Fibonacci`);
} else {
    console.log(`${numeroInformado} não pertence à sequência de Fibonacci`);
}