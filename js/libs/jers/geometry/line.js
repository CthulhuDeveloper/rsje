class Line{
    constructor(p1, p2){//validate
        this._p1 = p1;
        this._p2 = p2;
    }
    draw(){
        console.log('draw line');//other methos that define this
        return 'M' + this._p1.x + ',' + this._p1.y + ' L' + this._p2.x + ',' + this._p2.y;
    } 
    toString(){
        return this.p1.toString()+" "+this.p2.toString();
    };
    //distancia(p){};
    clone(){
        return new Line(this.x, this.y);
    };
    get p1(){return this._p1}
    set p1(p1){this._p1 = p1}
    get p1(){return this._p2}
    set p2(p2){this._p2 = p2}
}