function abrir() {    
    var cursos = document.getElementById("cursos");

    confirmar = confirm("Quer realmente abrir uma nova janela?");

    if(confirmar == true){
        if(cursos.selectedIndex = 1){
            novaJanela = window.open("http://www.fatecsorocaba.edu.br/curso_ads.asp", "janela1", "height = 600, width = 300");
        }
        if(cursos.selectedIndex = 2){            
            novaJanela = window.open("http://www.fatecsorocaba.edu.br/curso_ea.asp", "janela1", "height = 600, width = 300");
        }
        if(cursos.selectedIndex = 3){
            novaJanela = window.open("http://www.fatecsorocaba.edu.br/curso_gq.asp", "janela1", "height = 600, width = 300");
        }
        if(cursos.selectedIndex = 4){
            novaJanela = window.open("http://www.fatecsorocaba.edu.br/curso_log.asp", "janela1", "height = 600, width = 300");
        }
        if(cursos.selectedIndex = 5){
            novaJanela = window.open("http://www.fatecsorocaba.edu.br/curso_fm.asp", "janela1", "height = 600, width = 300");
        }
    }
}