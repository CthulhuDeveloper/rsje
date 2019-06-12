class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
        console.log('geometry'); //saber que se está usando desde geometry
    };
    
    toString(){
        return "("+this.x+","+this.y+")";
    };
    distancia(p){
        
    };
    clone(){
        return new Point(this.x, this.y);
    };
}

