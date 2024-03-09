function soma(indice, soma, k) {
    while (k < indice) {
        k++;
        soma += k;
    }

    console.log(soma);
}

soma(13, 0, 0); // 91 (RESULTADO ESPERADO)