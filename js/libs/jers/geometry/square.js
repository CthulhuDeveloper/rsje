class Square{
    constructor(p1, large){
        this.p1 = p1;
        this.large = large;
    }
    area(){
        return (this.large * this.large);
    }
    toString(){
        return this.p1.toString()+ ' large:' + large;
    } 
    
    draw(){
        return "M" + p1.x + "," + p1.y + " L" + p1.x + "," + p1.y*7 + " L" + p1.x*4 + "," + p1.y*7 + " L" + p1.x*4 + "," + p1.y + " L" + p1.x + "," + p1.y;
    }
}