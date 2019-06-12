class Triangle{
    constructor(p1,p2,p3){
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }
    area(){
        base = this.p3.x - this.p1.x;
        h = this.p2.y - this.p1.y;
    }
    toString(){
        return this.p1.toString()+ ' ' + this.p2.toString() + ' ' + this.p3.toString();
    } 
}

