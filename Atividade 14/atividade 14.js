
    var x = document.getElementById("op1").checked;
    var y = document.getElementById("op2").checked;

function validarDados() {
    

    if (document.forms.formulario.elements[0].value == "" || document.forms.formulario.elements[0].length < 3) {
        alert("Nome digitado incorretamente!");
        document.forms.formulario.elements[0].focus();
        return false;
    };

    // usando o nome no formulario
    if (document.forms.formulario.elements.idEmail.value == "" || document.forms.formulario.elements.idEmail.value.indexOf('@') == -1 || document.forms.formulario.elements.idEmail.value.indexOf('.') == -1) {
        alert("e-mail digitado incorretamente!");
        document.forms.formulario.elements.idEmail.focus();
       return false;
    }

    //usando o nome no formulario  de maneira direta
    if (document.forms.formulario.elements.idMensagem.value == "" || document.forms.formulario.elements.idMensagem.value.length < 20) {
        alert("A mensagem deve conter 20 ou mais caracteres!");
        document.getElementById("idMensagem").focus();
        return false;
    }

    if (x == true) {
        alert("Volte sempre à esta página!");
    }

    if (y == true) {
        alert("Que bom que você voltou a visitar esta página!");
    }

    return true;
}