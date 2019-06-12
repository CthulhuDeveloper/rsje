(function(){
    let num = prompt('Ingrese un número: ');
    for(let i = 1; i <= 10; i++){
        document.write('<br>'+num+' x '+i+' = '+(num*i));
    }
}());