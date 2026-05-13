const inverter = (str) => str.split('').reverse().map(Number);

let res = document.getElementById('res');

function calcular(){
    const opr = document.getElementById('operacao').value;
    const num = document.getElementById('input').value;
    
    let resultadoFinal = "";
    let tipoResultado = "";

    if(opr === "decimal-binario"){
        resultadoFinal = converterParaBinario(num);
        tipoResultado = "binário";
    }
    if(opr === "binario-decimal"){
        resultadoFinal = converterParaDecimal(num);
        tipoResultado = "decimal";
    }
   
    res.innerHTML = `<p>O seu número em <strong>${tipoResultado}</strong> é: <strong>${resultadoFinal}</strong></p>`;
}

function converterParaBinario(numStr){

    let num = parseInt(numStr, 10);

    if (num === 0) return 0;

    let restos = [];

   while (num > 0){
    restos.push(num % 2);
    num = Math.floor(num / 2);
   }

   return restos.reverse().join('');
}


function converterParaDecimal(num){
    const numArray = inverter(num);
    let decimal = 0;
    for (let i = 0; i < numArray.length; i++){
        decimal += numArray[i] * (2**i);
    }

    return decimal;
}