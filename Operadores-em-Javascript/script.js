//VERSÃO DIOGO

function comparacaoSoma() {
    let n1 = Number(prompt('Insira o primeiro número'));
    let n2 = Number(prompt('Insira o segundo número'));
    
    if (!n1 || !n2) {
        alert('Erro - parâmetros inválidos')
        comparacaoSoma();
    } else {
        function operacao() {
            resultado = (n1 + n2);

            if (resultado > 10 && resultado < 20 && (n1 == n2)) {
                alert(`Os números ${n1} e ${n2} são iguais e a soma dos números é ${resultado}, que é maior que 10 e menor que 20`)
                novaOperacao();
                
            } else if (resultado > 20 && (n1 == n2)) {
                alert(`Os números ${n1} e ${n2} são iguais e a soma dos números é ${resultado} e é maior que 20`)
                novaOperacao();

            } else if (resultado < 10 && (n1 == n2)) {
                alert(`Os números ${n1} e ${n2} são iguais e a soma dos números é ${resultado} e é menor que 10`)
                novaOperacao();

            } else if (resultado > 10 && resultado < 20 && (n1 != n2)) {
                alert(`Os números ${n1} e ${n2} são diferentes e a soma dos números é ${resultado} , que é maior que 10 e menor que 20`)
                novaOperacao();

            } else if (resultado > 20 && (n1 != n2)) {
                alert(`Os números ${n1} e ${n2} são diferentes e a soma dos números é ${resultado} e é maior que 20`)
                novaOperacao();

            } else if (resultado < 10 && (n1 != n2)) {
                alert(`Os números ${n1} e ${n2} são diferentes e a soma dos números é ${resultado} e é menor que 10`)
                novaOperacao();
            }
        }

        function novaOperacao() {
            let opcao = prompt(`Deseja fazer outra operação?\n 1 - Sim\n 2 - Não`);

            if (opcao == 1) {
                comparacaoSoma();
            } else if (opcao == 2) {
                alert(`Até mais!`)
            } else {
                alert(`Digite uma opção válida!`)
                novaOperacao();
            }
        }
    }
}

comparacaoSoma();