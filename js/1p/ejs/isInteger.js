function isInteger(n){
    if(n % 1 == 0 && !isNaN(n))
        return true;
    else 
        return false;
}
var n = readline();
print(isInteger(n));