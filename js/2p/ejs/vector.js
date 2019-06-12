class Vector{
    constructor(arr){//Validar que se mande un arrego.
        this.data = arr; //Array de números
    }

    initialize(valor, cantidad){//Inicializar arreglo con el valor ingresado
        for(x of this.data){
            
        }
    }

    min(){//Regresar el valor mínimo
        //Método del maestro
        let t = this.data[0];
        for(let x of this.data){
            if(t > x)
                t=x;
        }
        return t;
    }

    max(){//Regresar el valor máximo
        let t = this.data[0]
        for(let x of this.data){
            if(t < x)
                t=x;
        }
        return t;
    }

    sum(){//Sumar los valores
        let sum = 0;
        for(let a of this.data)
             sum += a;

        return sum;
    }

    avg(){//Sacar promedio
        let sum = 0;
        for(let x of this.data)
            sum += x;

        return sum/this.data.length;
    }

    vectorize(inicio, fin, cantidad){//Vectorizar (0,1,10) del 0 al 1 quiero 10 puntos .1
        let distancia = fin - inicio;
        let aumento = distancia/cantidad;
        let pts =  new Array(cantidad);

        let k = 0;
        for(let i = 0; i < fin; i += aumento){//mal
            pts[k] = i;
            k++;
            //pts.push() ingresar valor al final del arreglo
        }

        /*//Código maestro
        let i = (1-0)/10;
        for(var x of arr){
            
        }*/

        //No regresar un nuevo vector
        return pts;
    }

    getData(){//Regresa valor del array
        return this.data;
    }
}