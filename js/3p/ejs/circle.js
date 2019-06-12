class Circle{
    constructor(p, r){
        this._p = p;//el guión bajo significa 
        this._r = r;
    };
    toString(){
        return this.p.toString();
    };
    //distancia(p){};
    clone(){
        return new Point(this.x, this.y);
    };

    get p(){return this._p}
    set p(p){this._p = p}
    get r(){return this._r}
    set r(r){this._r = r}
}
