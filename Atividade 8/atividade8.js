var numPesquisa, opiniao, opiniaoPessimo, opiniaoBO;
var sexo, sexoM, sexoF;
var mediaIdade;
var cont;
var idade, maisVelho, maisNovo;

cont = mediaIdade = sexoM = sexoF = opiniaoPessimo = opiniaoBO = 0;

do{
    if (cont == 45)
        break;
    idade = parseInt(prompt("Digite a sua idade"));

    if(idade > maisVelho)
        maisVelho = idade;
    if(idade < maisNovo)
        maisNovo = idade;

    mediaIdade += idade;

    do{
        sexo = prompt("Digite o sexo: [M/F]");
        sexo = sexo.toUpperCase();
    }while(sexo != "M" && sexo != "F");

    if (sexo == "M")
    sexoM++;
    else
    sexoF++;

    do{
        opiniao = prompt("Você avaliaria o filme como: \n 1 - Péssimo \n 2 - Regular \n 3 - Bom \n 4 - Ótimo");
    }while(opiniao < 1 || opiniao > 4);

    if(opiniao == 3 || opiniao == 4)
        opiniaoBO++;

    if(opiniao == 1)
        opiniaoPessimo++;

    numPesquisa = confirm("Continuar Pesquisa?");
    cont++;

    if (cont == 1)
        maisVelho = maisNovo = idade;
    
}while (numPesquisa != 0);

mediaIdade = parseInt(mediaIdade/cont);
opiniaoBO = ((opiniaoBO/cont) * 100).toPrecision(2);

alert("Média de idade: " + (mediaIdade) + "\n" +
      "Idade do entrevistado mais velho: " + maisVelho + "\n" + 
      "Idade do entrevistado mais novo: " + maisNovo + "\n" + 
      "Quantidade dos entrevistados que avaliaram o filme como péssimo: " + opiniaoPessimo + "\n" + 
      "Porcentagem dos entrevistados que avaliaram o filme como bom ou ótimo: " + opiniaoBO + "%\n" + 
      "Número de entrevistados masculino: " + sexoM + "\n" + 
      "Número de entrevistados feminino: " + sexoF);