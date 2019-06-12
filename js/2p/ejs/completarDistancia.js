class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
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
}

var point1 = new Point();
var point2 = new Point();

point1.x = 5;
point1.y = 2;

point2.x = -5;
point2.y = -2;

console.log(point2.distancia(point1));