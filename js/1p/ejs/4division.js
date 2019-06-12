function argRequired(arg1, arg2){
    if(arg1===null)
        throw new Error('arg cannot be null or undefined');
    if(arg2===null)
        throw new Error('arg cannot be null or undefined');
}

function isZero(e){
    if(e===0)
        throw new Error('zero div');
    else
        return e;
}

var isNumber = function(x){
    if(typeof x === 'number' && !isNaN(x))
    {
        return true;
    }        
    else
        return false;
}

function div(a, b){
    argRequired(a, b);
    isZero(b)
    if(isNumber(a) == true && isNumber(b) == true)
        return a / b;
    else 
        return 'Valor inválido';
}

print('Primer valor: ')
var a = parseInt(readline());

print('Segundo valor: ')
var b = parseInt(readline());

print('Cociente es: ' + div(a, b));