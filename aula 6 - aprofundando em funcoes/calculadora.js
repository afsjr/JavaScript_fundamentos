function calculadora(){
    const operacao = Number(prompt('Escolha uma opçao :\n 1 - Soma \n 2 - Subtraçao\n 3 - multiplicacao\n 4 - Divisão \n 5 - divisao inteira \n 6 - potenciação'));
    
    if (!operacao || operacao >= 7){
        alert('Erro - Operaçao invalida');
        calculadora();

    } else {

            let n1 = Number(prompt('insira o primeiro valor'));
            let n2 = Number(prompt('insira o segundo valor'));
            let resultado;
            if (!n1 || !n2){
                alert('Erro parâmentros inválidos ! Tente novamente !');
                calculadora();

            }else { 

                function soma(){
                    resultado = n1+n2;
                    alert(`${n1}+${n2} = ${resultado}`);
                    novaoperacao();
                }
            
                function subtracao(){
                    resultado = n1 - n2;
                    alert(`${n1} - ${n2} = ${resultado}`);
                    novaoperacao();
                }
                function multiplicacao(){
                    resultado = n1 * n2;
                    alert(`${n1} * ${n2} = ${resultado}`);
                    novaoperacao();
                }
                function divisaoreal(){
                    resultado = n1 / n2;
                    alert(`${n1} / ${n2} = ${resultado}`);
                    novaoperacao();
                }
                function divisaointeira(){
                    resultado = n1+n2;
                    alert(`o resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                    novaoperacao();
                }
                function potenciacao(){
                    resultado = n1**n2;
                    alert(`${n1} elevado a ${n2} é igual a  ${resultado}`);
                    novaoperacao();
                }
            
                function novaoperacao (){
                    let opcao = prompt(`Deseja fazer uma nova operaçao ?\n1 - Sim \n2 - Não`);
            
                    if (opcao == 1){
                        calculadora();
                    }else if (opcao == 2){
                        alert('Até mais !!!')
                    }else {
                        alert('digite uma opção válida  ');
                        novaoperacao();
                    }
            }
        
         }    

            if (operacao == 1){
            soma();
            }else if (operacao == 2){
            subtracao();
            }else if (operacao ==3){
            multiplicacao();
            }else if (operacao== 4){
            divisaoreal();
            }else if (operacao== 5){
            divisaointeira();
            }else if (operacao== 6){
            potenciacao();
            }
    }
}
calculadora();