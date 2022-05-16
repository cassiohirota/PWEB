function janelaFechada(){
    var imagem = document.getElementById("img");

    imagem.addEventListener('mouseover', function(){
        imagem.src = "janelaAberta.png"
    })
    /* Pedaço de código desabilitado para que possa manter o vidro quebrado após tirar o mouse da imagem
    imagem.addEventListener('mouseout', function(){
        imagem.src = "janelaFechada.png"
      })
*/
      imagem.addEventListener('click', function(){
        imagem.src = "janelaQuebrada.png"
    })
}