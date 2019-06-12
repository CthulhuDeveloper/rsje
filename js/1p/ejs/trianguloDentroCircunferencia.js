//alert('Radio de una circunferencia dado un triángulo circunscrito en ésta.');
print('Ingrese el primer lado del triángulo: ');
var a = parseInt(readline());
print('Ingrese el segundo lado del triángulo: ');
var b = parseInt(readline());
print('Ingrese el tercer lado del triángulo: ');
var c = parseInt(readline());

var s = (a+b+c)/2;
var r = (a*b*c)/(4*(Math.sqrt(s*(s-a)*(s-b)*(s-c))));

print("El radio del círculo es: " + r);