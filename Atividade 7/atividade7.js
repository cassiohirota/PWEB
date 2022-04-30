var tipo;

    var escolha1 = prompt("Escolha as opções\n 1 - Pedra \n 2 - Papel \n 3 - Tesoura");
    if(escolha1 < 1 && escolha1 > 3)
        alert("Digite valores entre 1 a 3!");

if (escolha1 == 1)
tipo = "Pedra";
if (escolha1 == 2)
tipo = "Papel";
if(escolha1 == 3)
tipo = "Tesoura";

var escolha2 = Math.random();

// Tesoura <= 0.33
// Papel <= 0.66
// Pedra <= 0.99
if (escolha2 <= 0.33)
    escolha2 = "Pedra";
if (escolha2 <= 0.66)
    escolha2 = "Papel";
if(escolha2 <= 1)
    escolha2 = "Tesoura";

if(tipo == escolha2)
    alert("Empate " + tipo + "=" + escolha2);
else{
    if(tipo == "Pedra" && escolha2 == "Papel")
        alert("Você Perdeu " + tipo + "<" + escolha2);

    if(tipo == "Pedra" && escolha2 == "Tesoura")
        alert("Você Ganhou " + tipo + ">" + escolha2);

    if(tipo == "Papel" && escolha2 == "Pedra")
        alert("Você Ganhou " + tipo + ">" + escolha2);
        
    if(tipo == "Papel" && escolha2 == "Tesoura")
        alert("Você Perdeu " + tipo + "<" + escolha2);

    if(tipo == "Tesoura" && escolha2 == "Papel")
        alert("Você Ganhou " + tipo + ">" + escolha2);

    if(tipo == "Tesoura" && escolha2 == "Pedra")
        alert("Você Perdeu " + tipo + "<" + escolha2);
}