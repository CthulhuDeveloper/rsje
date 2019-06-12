function Persona(){
    nombre='';
    edad=0;
    ocupacion='';
    sexo='';
}

var persona1 = new Persona();
persona1.nombre = 'Gisel';
persona1.edad = 18;
persona1.ocupacion = 'Científica';
persona1.sexo= 'Femenino';

var persona2 = new Persona();
persona2.nombre = 'Enrique';
persona2.edad = 18;
persona2.ocupacion = 'Programador';
persona2.sexo= 'Masculino';

var persona3 = new Persona();
persona3.nombre = 'Huxley';
persona3.edad = 54;
persona3.ocupacion = 'Escritor';
persona3.sexo= 'Masculino';

console.log('Persona 1: '+persona1.nombre);
console.log('Persona 2: '+persona2.nombre);
console.log('Persona 3: '+persona3.nombre);