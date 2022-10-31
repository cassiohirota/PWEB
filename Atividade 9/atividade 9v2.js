

const btnmaiorValor = document.querySelector("#maiorValor");
const btnOrdenar = document.querySelector("#ordenar");

btnmaiorValor.addEventListener("click", function (){
    let maior = 0;
    
    let num1 = parseInt(document.querySelector('#valor1').value);
    let num2 = parseInt(document.querySelector('#valor2').value);
    let num3 = parseInt(document.querySelector('#valor3').value);

        maior = num1;        
        if(num2 > maior)
            maior = num2;
        if(num3 > maior)
            maior = num3;
    
        alert("Maior valor: " + maior);
});



btnOrdenar.addEventListener("click", () =>{
    
    let num1 = parseInt(document.querySelector('#valor1').value);
    let num2 = parseInt(document.querySelector('#valor2').value);
    let num3 = parseInt(document.querySelector('#valor3').value);
    var itens = [num1, num2, num3];
    itens.sort(function(a, b){return a-b})
    alert(itens);
});

