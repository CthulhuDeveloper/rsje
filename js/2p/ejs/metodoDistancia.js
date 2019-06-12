//Calcular distancia entre dos puntos
var aPoint = {
    x:0, 
    y:1
}

var bPoint = {
    x:2, 
    y:5
}

//** operador para elevar al cuadrado
function distancia(aPoint, bPoint){//Los valores del parámetro hacen referencia a TODO el objeto
    //return Math.sqrt(Math.pow(bPoint.x - aPoint.x, 2) + Math.pow(bPoint.y - aPoint.y, 2));
    return Math.sqrt((bPoint.x - aPoint.x)**2 + (bPoint.y - aPoint.y)**2);
};

console.log(distancia(aPoint, bPoint));