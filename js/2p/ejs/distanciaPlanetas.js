function Planet(){
    this.distanciaS = 0;
    this.nombre = '';
    this.distanciaAB = function(pB){
        return Math.abs(this.distanciaS-pB.distanciaS);
    } 
    this.choosePlanet = function(){
        this.num = prompt('\tPlanetas' +
        '\n1 - Mercurio' +
        '\n2 - Venus' +
        '\n3 - Tierra' +
        '\n4 - Marte' +
        '\n5 - Jupiter' +
        '\n6 - Saturno' +
        '\n7 - Urano' +
        '\n8 - Neptuno' +
        '\n9 - Plutón' +
        '\nIngrese el número del planeta a elegir:', 0);
        console.log();
        switch(Number(this.num)){
            case 1:
                this.distanciaS = 36;
                this.nombre = 'Mercurio';
                break;
            case 2:
                this.distanciaS = 67;
                this.nombre = 'Venus';
                break;
            case 3:
                this.distanciaS = 93;
                this.nombre = 'Tierra';
                break;    
            case 4:
                this.distanciaS = 141;
                this.nombre = 'Marte';
                break;
            case 5:
                this.distanciaS = 483;
                this.nombre = 'Jupiter';
                break;
            case 6: 
                this.distanciaS = 886;
                this.nombre = 'Saturno';
                break;
            case 7:
                this.distanciaS = 1782;
                this.nombre = 'Urano';
                break;
            case 8:
                this.distanciaS = 2793;
                this.nombre = 'Neptuno';
                break;
            case 9:
                this.distanciaS = 3670;
                this.nombre = 'Plutón';
                break;
            default:
                console.log('\nValor inválido.');
                break;
        }
    }
}

planet1 = new Planet();
planet1.choosePlanet();

planet2 = new Planet();
planet2.choosePlanet();

planet1.distanciaAB(planet2);