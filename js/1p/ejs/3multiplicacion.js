function argRequired(arg1, arg2){
    if(arg1===null)
        throw new Error('arg cannot be null or undefined');
    if(arg2===null)
        throw new Error('arg cannot be null or undefined');
}

var isNumber = function(x){
    if(typeof x === 'number' && !isNaN(x))
    {
        return true;
    }        
    else
        return false;
}

function multi(a, b){
    argRequired(a, b);
    if(isNumber(a) == true && isNumber(b) == true)
        return a * b;
    else 
        return 'Valor inválido';
}

print('Primer valor: ')
var a = parseInt(readline());

print('Segundo valor: ')
var b = parseInt(readline());

print('Producto es: ' + multi(a, b));