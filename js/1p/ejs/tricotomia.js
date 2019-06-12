//Tricotomía: Entre dos números sólo se puede dar una de las tres condiciones <, > y =

var a = Number(readline());
var b = Number(readline());

if(a > b)
    print('A es mayor');
else
    print('B es mayor');

if(a == b)
    print('Las variables son iguales');