class conta{
    constructor(nome_cor, banco, numConta, saldo){
        this.nome_cor = nome_cor;
        this.banco = banco;
        this.numConta = numConta;
        this.saldo = saldo;
    }

    get getNome_cor(){
        return this.nome_cor;
    }
    get getBanco(){
        return this.banco;
    }
    get getNumConta(){
        return this.numConta;
    }
    get getSaldo(){
        return this.saldo;
    }

    set setNome_cor(valor){
        this.nome_cor = valor;
    }
    set setBanco(valor){
        this.banco = valor;
    }
    set setNumConta(valor){
        this.numConta = valor;
    }
    set setSaldo(valor){
        this.saldo = valor;
    }
}

class contaCorrente extends conta{
    constructor(nome_cor, banco, numConta, saldo){
        super(nome_cor, banco, numConta, saldo);
    }
    
    saldoEsp;

    get getSaldoEsp(){
        return this.saldoEsp;
    }
    set setSaldoEsp(valor){
        this.saldoEsp = valor;
    }

}

class contaPoupanca extends conta{
    constructor(nome_cor, banco, numConta, saldo){
        super(nome_cor, banco, numConta, saldo);
    }
    juros;
    dataVencimento;

    get getJuros(){
        return this.juros;
    }
    set setJuros(valor){
        this.juros = valor;
    }

    get getDataVencimento(){
        return this.dataVencimento;
    }
    set setDataVencimento(valor){
        this.dataVencimento = valor;
    }
}

var contaCor = new contaCorrente();
contaCor.setNome_cor = "Julio Alves";
contaCor.setBanco = "Itau";
contaCor.setNumConta =  1224234235;
contaCor.setSaldo = 3000;
contaCor.setSaldoEsp = 1000;
alert("Nome: " + contaCor.getNome_cor + "\nBanco: " + contaCor.getBanco + "\nNumero da conta: " + contaCor.getNumConta + "\nSaldo: " + "R$" + contaCor.getSaldo + "\nSaldo Especial: " + "R$" + contaCor.getSaldoEsp);

var contaPou = new contaPoupanca();
contaPou.setNome_cor = "Luiza Tavares";
contaPou.setBanco = "Bradesco";
contaPou.setNumConta =  43243252321;
contaPou.setSaldo = 15000;
contaPou.setJuros = 5;
contaPou.setDataVencimento = "20/12/2022";
alert("Nome: " + contaPou.getNome_cor + "\nBanco: " + contaPou.getBanco + "\nNumero da conta: " + contaPou.getNumConta + "\nSaldo: " + "R$" + contaPou.getSaldo + 
"\nJuros: " + contaPou.getJuros + "%" + "\nData de Vencimento: " + contaPou.getDataVencimento);

