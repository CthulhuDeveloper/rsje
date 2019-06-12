class Line{
    constructor(p1, p2){
        this._p1 = p1;//el guión bajo significa 
        this._p2 = p2;
    };
    draw(){console.log('draw line');}//other
    /*toString(){
        return "("+this.x+","+this.y+")";
    };*/
    //distancia(p){};
    clone(){
        return new Point(this.x, this.y);
    };

    get p1(){return this.p1}
    set p1(x){this._p1 = p1}
    get p2(){return this._p2}
    set p2(x){this._p2 = p2}
}