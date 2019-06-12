class Rectangle{
    constructor(p1, p2){
        this.p1 = p1;
        this.p2 = p2;
    }
    area(){
        var b = this.p2.x - this.p1.x;
        var h = this.p2.y - this.p1.y;
        return (b*h);
    }
    toString(){
        return this.p1.toString()+ ', ' + this.p2.toString();
    } 
    
    draw(){
        //return "M" + p1.x + "," + p1.y + " L" + p2.x + "," + p2.y + " L" + p3.x + "," + p3.y + " L" + p1.x + "," + p1.y;
        console.log('M' + p1.x + ',' + p1.y + ' H' + p2.x-p1.x + ',' + p2.y - p1.y + ' M' + p1.x + ',' + p1.y + ' V' + (p2.x - p1.x) * 2 + ',' + (p2.y - p1.y) * 2 + ' M' + p2.x + ',' + p2.y + ' H' + p2.x-p1.x + ',' + p2.y - p1.y + ' M' + p1.x + ',' + p1.y + ' V' + (p2.x - p1.x) * 2 + ',' + (p2.y - p1.y) * 2);
        return 'M' + p1.x + ',' + p1.y + ' H' + p2.x-p1.x + ',' + p2.y - p1.y + ' M' + p1.x + ',' + p1.y + ' V' + (p2.x - p1.x) * 2 + ',' + (p2.y - p1.y) * 2 + ' M' + p2.x + ',' + p2.y + ' H' + p2.x-p1.x + ',' + p2.y - p1.y + ' M' + p1.x + ',' + p1.y + ' V' + (p2.x - p1.x) * 2 + ',' + (p2.y - p1.y) * 2;
    }
    getBase(){
        return this.p2.x - this.p1.x;
    }

    getAltura(){
        return this.p2.y - this.p1.y;
    }
    /*
    draw(){
        return "M" + p1.x + "," + p1.y + " L" + p1.x + "," + p1.y*7 + " L" + p1.x*4 + "," + p1.y*7 + " L" + p1.x*4 + "," + p1.y + " L" + p1.x + "," + p1.y;
    }*/
}