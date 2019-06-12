function isMultipleOf(a, b){
    /*
    if(a > b){
        if(a % b == 0)
            return true;
        else 
            return false;
    }
    else{
        if(b % a == 0)
            return true;
        else 
            return false;
    }
    */
   return !isDivisibleBy();
}

function isDivisibleBy(a, b){
    if(a % b == 0 && isInteger(a) && isInteger(b))
        return true;
    else
        return false;
}

function isInteger(n){
    if(n % 1 == 0 && !isNaN(n))
        return true;
    else 
        return false;
}

print('Ingrese el primer número: ');
var a = parseInt(readline());
print('Ingrese el segundo número: ');
var b = parseInt(readline());

print('Multiplo: ' + isMultipleOf(a, b));
print('Divisible: ' + isDivisibleBy(a, b));


