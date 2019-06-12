function isPositive(n){
    if(n >= 0)
        return true;
    else
        return false;
}

function isNegative(n){
    return !isPositive(n);
}

print('Numero: ');
var num = parseInt(readline());

print(isPositive(num)?'Positivo':'Negativo');