let antesFlecha = new Function('x', 'y', 'return x+y')

antesFlecha(3,2)
antesFlecha("Hola ,"+ 35 )


///////////////////////////////
let f1 = function multiply (a,b){
    return a*b;
}

//Arrow function - funciones flecha
let multiply = (a,b) => a*b;
multiply(1,2)

//otras 
let h = a => a%3 //regresa el 

//returns undefined
let empty = () => {};

(()=>"pine")(); //returns pine

var max = (a,b) => a>b ? a:b;

var simple = a => a>20 ? 20:a;
simple(21);
simple(20);

((a,b)=>a*b)();
((a,b)=>a*b)(2,3); //6
