class Triangle{
    constructor(p1,p2,p3){
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }
    area(){
        base = this.p3.x - this.p1.x;
        h = this.p2.y - this.p1.y;
        return (base * h);
    }
    toString(){
        return this.p1.toString()+ ' ' + this.p2.toString() + ' ' + this.p3.toString();
    } 
    draw(){
        return "M" + this.p1.x + "," + this.p1.y + " L" + this.p2.x + "," + this.p2.y + " L" + this.p3.x + "," + this.p3.y + " L" + this.p1.x + "," + this.p1.y;
    }
}
