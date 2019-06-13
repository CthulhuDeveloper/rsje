(function (x){ //No lleva nombre
    return function(y){ //regresa una función
        return x*y;
    };
})(2)(3); 

(function(){
    console.log('Hola mundo!');
})(); //Se utilizan paréntesis al final para invocarla

(function (x){ //No lleva nombre
    return function(y){ //regresa una función
        return function(z){
            return x + y + z;
        }
    };
})(2)(3)(5); 

//simple iifee
abc = (function(){
    return{
        hello: function hello(){
            return 'Hello, world!';
        }
    };
})();

abc.hello();

/////////////////////////////////////////////////////////////////////

//typef of functions

//most common one
function foo(){
    console.log('Called foo');
}

//an anonymous function expression
var bar = function(){
    console.log('Called bar')
}

//an anonymous iife function
(function (){
    console.log('This function is invoked immeditely!');
})();

//alternate syntax
(function(){
    console.log('This function is ALSO invoked immeditely!');
}());//here

/////////////////////////////////////////////////////////////////////

//object literal : methods INSIDE

var Module = {//Declaring the object
    methodOne : function(){
        console.log('preforming a very omplex task(1)...');
    },
    methodTwo : function(){
        console.log('preforming a very omplex task(2)...');
    }
}

//object literal : methods OUTSIDE

var Module = {};//Making the object

    Module.methodOne = function(){
        console.log('preforming a very omplex task(1)...');
    },
    Module.methodTwo = function(){
        console.log('preforming a very omplex task(2)...');
    }
