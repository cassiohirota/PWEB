function modificar(){
    var txt = document.getElementById("texto").value;
    var x = document.getElementById("maiuscula");
    var y = document.getElementById("minuscula");

    if(x.checked == true && y.checked == true)
        return alert("Marque somente uma das opções!");
        
        else if(x.checked == false && y.checked == false)
            return alert("Marque pelo menos uma das opções!");
        else if(x.checked == true)
            return document.getElementById("Resultado").value = txt.toUpperCase(); 
        else if(y.checked == true)
            return document.getElementById("Resultado").value = txt.toLowerCase(); 
    
}