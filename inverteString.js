function inverterString(s) {
    let stringInvertida = "";
    for (let i = s.length - 1; i >= 0; i--) {
        stringInvertida += s[i];
    }
    return stringInvertida;
}

const entrada = "teste";
const resultado = inverterString(entrada);
console.log(`A string invertida é: ${resultado}`);