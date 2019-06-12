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

//Cálculo de las raices cuadradas
var raiz1 = (-b+(Math.sqrt(b*b-4*a*c)))/2*a;
var raiz2 = (-b-(Math.sqrt(b*b-4*a*c)))/2*a;

print('Raiz cuadrada 1: ' + raiz1);
print('Raiz cuadrada 2: ' + raiz2);




