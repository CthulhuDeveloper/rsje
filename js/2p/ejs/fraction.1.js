class Fraction{
    constructor(n, d){//validate: n,d
        this.n = n;
        this.d = d;
        if(typeof(this.n) !== 'number')
            throw new Error('invalid argument type')

        if(isNaN(this.n) || isNaN(this.d))
            throw new Error('value can\'t be null or undefined');

        if(this.n === 0 || this.d === 0)        
            throw new Error('values can\'t be zero');
    }

    sum(f){
        let n = (this.n * f.d) + (this.d * f.n);
        let d = this.d * f.d;

        return new Fraction(n, d);
    }
    subt(f){
        let n = (this.n * f.d) - (this.d * f.n);
        let d = this.d * f.d;

        return new Fraction(n, d);
    };

    div(f){
        let n = (this.n * f.d);
        let d = this.d * f.n;

        return new Fraction(n, d);
    };

    mul(f){//validate
        if(f instanceof Fraction){
            let n = this.n * f.n;
            let d = this.d * f.d;
            //euclides Here
            return new Fraction(n, d);
        }        
    }

    //euclides(n, d){return this.d;};

    euclides(a, b) {
        var iaux; //auxiliar
        a = Math.abs(a); //tomamos valor absoluto
        b = Math.abs(b);
        var i1 = Math.max(a, b); //i1 = el más grande
        var i2 = Math.min(a, b); //i2 = el más pequeño
      
        do {
          iaux = i2; //guardar divisor
          i2 = i1 % i2; //resto pasa a divisor
          i1 = iaux; //divisor pasa a dividendo
        } while (i2 !== 0);

        return i1; //ultimo resto no nulo
    }

    euclides() {
        var iaux; //auxiliar
        var a = this.n;
        var b = this.d;
        a = Math.abs(a); //tomamos valor absoluto
        b = Math.abs(b);
        var i1 = Math.max(a, b); //i1 = el más grande
        var i2 = Math.min(a, b); //i2 = el más pequeño
      
        do {
          iaux = i2; //guardar divisor
          i2 = i1 % i2; //resto pasa a divisor
          i1 = iaux; //divisor pasa a dividendo
        } while (i2 !== 0);

        return i1; //ultimo resto no nulo
    }
}

var f1 = new Fraction(1,2);
var f2 = new Fraction(4,2);
console.log(f1.mul(f2));
console.log(f1.div(f2));
console.log(f1.sum(f2));
console.log(f1.subt(f2));
console.log(f1.euclides());
