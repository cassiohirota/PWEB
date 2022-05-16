class retangulo{
    constructor(x, y){
    this.base = x;
    this.altura = y;
    }
    calc (){
    return this.base*this.altura;
    }
}

ret = new retangulo(10, 15);
alert('Área: ' + ret.calc());