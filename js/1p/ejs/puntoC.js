//alert('Radio de una circunferencia dado un triángulo circunscrito en ésta.');
print('Ingrese el primer lado del triángulo: ');
var a = parseInt(readline());
print('Ingrese el segundo lado del triángulo: ');
var b = parseInt(readline());

print('Ingrese la ordenada: ')
var y = parseInt(readline());

print('Ingrese la abcisa: ')
var x = parseInt(readline());

//Obtener lado C
var c = Math.sqrt((a*a)+(b*b));

print("Triángulo");
print('a: ' + a);
print('b: ' + b);
print('c: ' + c);

print('\n');

if(x == y){
    if(y < c)
    print('El punto está dentro de la circunferencia.');

    else if(y == c)
    print('El punto está sobre la circunferencia.');

    else if(y > c)
    print('El punto está fuera de la circunferencia.');
}else if(x > y){
    if(x < c)
    print('El punto está dentro de la circunferencia.');

    else if(x == c)
    print('El punto está sobre la circunferencia.');

    else if(x > c)
    print('El punto está fuera de la circunferencia.');
}
else if(y > x){
    if(y < c)
    print('El punto está dentro de la circunferencia.');

    else if(y == c)
    print('El punto está sobre la circunferencia.');

    else if(y > c)
    print('El punto está fuera de la circunferencia.');
}


