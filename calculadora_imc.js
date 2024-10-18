
const resultado = document.getElementById("resultado");

function imc() {
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const calcular = document.getElementById("calcular");
    
    if(nome == '' || altura == '' || peso == ''){
       resultado.textContent = "Preencha todos os campos, por favor!";
       return;
    }

    if(isNaN(peso) || isNaN(altura)) {
        resultado.textContent = "Os valores de peso e altura devem ser numéricos. Obs: use '.' ou invez de ','"
        return;
    }

    else{
        const valorIMC = (peso/(altura*altura)).toFixed(2);
        
        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso';
        } else if (valorIMC >= 18.5 && valorIMC < 25) {
            classificacao = 'com peso ideal';
        } else if (valorIMC >= 25 && valorIMC < 30) {
            classificacao = 'levemente acima do peso';
        } else if (valorIMC >= 30 && valorIMC < 35) {
            classificacao = 'com obesidade grau 1';
        } else if (valorIMC >= 35 && valorIMC < 40) {
            classificacao = 'com obesidade grau 2';
        } else {
            classificacao = 'com obesidade grau 3';
        }
        
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao} `;
    }
}

calcular.addEventListener('click', imc);