var sum = 0;

function Par(i){
    if(isNumber(i)){
        if(i % 2 == 0){
            print(i);
         sum += i;
        }        
    }    
    else return 1;
}

function isNumber(x){
    if(typeof x === 'number')
        return true;
    else 
        return false;
}

for(var i = 3; i <= 9; i++){
    Par(i);
}

print('La suma es: ' + sum);