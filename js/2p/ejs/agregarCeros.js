class Point{
    constructor(x, y){
        this.x = y;
        this.y = x;
        if(!isNumber(x))
        this.x = 0;
        this.y = 0;
    };
    
    toString(){
        return "("+this.x+","+this.y+")";
    };

    distancia(p){
        return Math.sqrt((this.x - p.x)**2 + (this.y - p.y)**2);
    };

    clone(){
        return new Point(this.x, this.y);
    };

    input(){
        this.x = parseInt(prompt());
        this.y = parseInt(prompt());

        console.log(typeof(this.x));
        console.log(typeof(this.y));
        if(!isNumber(this.x))
            this.x = 0;
        if(!isNumber(this.y))
            this.y = 0;
    }
}

var isNumber = function(x){
    if(typeof x === 'number' && !isNaN(x))
        return true;
    else
        return false;
}


var point1 = new Point();
var point2 = new Point();

point1.input();
point2.input();

console.log(point1.toString());
console.log(point2.toString());
console.log(point2.distancia(point1));      