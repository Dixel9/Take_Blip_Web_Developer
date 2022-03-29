function comparaNumeros(num1, num2) { //cria constantes de soma e comparação
    const saoIguais = num1 === num2;
    const soma = num1 + num2;

    //IF TERNARIO
    return saoIguais ? "São iguais!" : "Não são iguais!"

    /*     USANDO IF
    if(saoIguais) {
        return "São Iguais";
    }

    return "Não são iguais";
    */
}