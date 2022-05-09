
const itens = [];

function maiorNum (num1, num2, num3){
    var maior;

    maior = num1;        
    if(num2 > maior)
        maior = num2;
    if(num3 > maior)
        maior = num3;
    
    alert("Maior valor: " + maior);
}

function ordenar(){
    itens.push(10);
    itens.push(9);
    itens.push(1);
    itens.push(25);
    itens.push(20);
    itens.push(5);
    itens.push(13);
    alert(itens.sort(function(a, b) {return a - b;}));
}

maiorNum(1,2,3);
ordenar();
