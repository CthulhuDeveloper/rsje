//1, -2, 0; 2, 3, 5; 2, 4, -4;

//Leer tres números
print('Ingrese el primer numero: ');
var a = parseInt(readline());

print('Ingrese el segundo numero: ');
var b = parseInt(readline());

print('Ingrese el tercer numero: ');
var c = parseInt(readline());

function Condiciones(num){
    //Elemento neutro aditivo
    if(num == 0)
        print('\nEl numero '+ num +' es el elemento neutro aditivo.')
    //El cuadrado sólo si es negativo
    if(num < 0)
        print("\nEl cuadrado del numero " + num + " es: " + Math.pow(num, 2));
}

Condiciones(a);
Condiciones(b);
Condiciones(c);

//Perímetro del triángulo
print('\nEl perimetro del triangulo es: ' + (a+b+c));

//Fórmula general
print('\nFórmula general')
if(a != 0){
    //Cálculo de las raices cuadradas
    var raiz = Math.sqrt(b*b-(4*a*c));
    if(raiz > 0){
        var x1 = (-b+(raiz))/2*a;
        var x2 = (-b-(raiz))/2*a;
        print('Raiz cuadrada 1: ' + x1);
        print('Raiz cuadrada 2: ' + x2);
    }
    else{
        print('No es posible realizar la operación.')
    }
}
else{
    print('El valor de "a" debe ser diferente a 0.');
}







