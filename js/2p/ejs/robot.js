class Robot{
    constructor(name){
        this.name = name;
    };
    speak(){
        console.log('Adiós humanos.');
    };
    makeCoffee(){
        console.log('Preparando el café.');
    };
    blinkLight(){
        console.log('Parpadeando.');
    };
}

var robot1 = new Robot();
console.log(robot1.name);

