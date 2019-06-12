print('Ingrese un número: ');
var num = Number(readline());

function isEven(n){
    if(n % 2 === 0)
      return true;
    else
      return false;
  }
  
  function isOdd(n){
    return !isEven(n);
  }

  if(isEven(num))
    print('El valor es par')

  if(isOdd(num))
    print('El valor es impar');