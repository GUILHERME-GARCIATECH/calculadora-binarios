const inverter = (str) => str.split('').reverse().map(Number);
const newArray = (str) => str.split('').map(Number);

let res = document.getElementById('res');

function calcular(){
    const opr = document.getElementById('operacao').value;
    const num = document.getElementById('input').value;

    
    if(opr === "decimal-binario"){
         const resultadoFinal = converterParaBinario(num);
    }
    if(opr === "binario-decimal"){
        const resultadoFinal = converterParaDecimal(num);
    }
   

    res.innerHTML = `<p>O seu número em decimal é ${resultadoFinal}</p>`
}
// [2, 5, 6] => [6, 5, 2]
function converterParaBinario(num){
    let binario = [];
    for (let i = 0; i < num.length; i++){
        binario
    }
}


function converterParaDecimal(num){
    const numArray = inverter(num);
    let decimal = 0;
    for (let i = 0; i < numArray.length; i++){
        decimal += numArray[i] * (2**i);
    }

    return decimal;
}