//s = ['a','c','b','a','b','b','a','c','d'];
s = 'acbabbad'.split("");
val = '';

s.map(
    function(num){
        if(num === 'a')
            val += '3';
        if(num === 'b')
            val += '2';
        if(num === 'c')
            val += '1';
        if(num === 'd')
            val += '*';
    }
);
val = parseInt(val);
console.log(val);
