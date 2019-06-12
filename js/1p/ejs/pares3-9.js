function isPar(i){
    if(isNumber(i)){
        if(i % 2 == 0)
        print(i);
    }    
}

function isNumber(x){
    if(typeof x === 'number')
        return true;
    else 
        return false;
}

for(var i = 3; i <= 9; i++){
    isPar(i);
}