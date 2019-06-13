function romanize(val){
    let values = [1, 5, 10, 50, 100, 500, 1000];
    let letras = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    
    let res = [];
    let pu = 0;
    let last;
    let pos;
    let num, letra; 
    
    for(let i = 6; num = values[i], letra = letras[i]; i--){
        if(val > num){
            pu = Math.floor(val / num);
    
            //Restar el actual
            val -= pu * num;
    
            if(pu < 4){
                //Meter las letras
                while(pu--){
                    res.push(letra)
                }
            }
            else{
                // No se pueden repetir 4+ veces
                last = res.pop(); // Última letra
    
                // Si es el string vacío o letra == "M" (no hay anterior)
                // usamos la letra anterior a esta
                pos = (last ? letras.indexOf(last) : i) + 1; 
    
                // Y si letra == "M" -> letras[pos] no existirá y usamos M
                insert = letra + (letras[pos] || 'M'); 
    
                // Insertamos el string
                res.push(insert);
            }
        } 
        else{
            // Si no vamos a poner letra usamos un ""
            // para que no afecte pop
            res.push('');
        }
    }
    return res.join('');
}    

function romArab (str) {
    var str = str.toUpperCase(),
        validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
        token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
        key = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
        num = 0, m;

    if (!(str && validator.test(str)))
        return false;
    while (m = token.exec(str))
        num += key[m[0]];
    return num;
}


/*
function arabRom (num) {
    if (!+num)
        return false;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

arabRom(55);
*/

/*
function romanize(n) {
	var
		values = [1, 5, 10, 50, 100, 500, 1000],
		letras = ['I', 'V', 'X', 'L', 'C', 'D', 'M'],
		res = [],
		num, letra, val, pos, insert

	for(var i = 6; num = values[i], letra = letras[i]; i--) {
		// Suficientemente grande
		if(n >= num) {
			// Número de letras repetidas
			var r = Math.floor(n / num); 

			// Restamos el actual
			n -= r * num; 

			if(r < 4){
				// Metemos las letras
				while(r--){
					res.push(letra);
				}
			} else {
				// No se pueden repetir 4+ veces
				val = res.pop(); // Última letra

				// Si es el string vacío o letra == "M" (no hay anterior)
				// usamos la letra anterior a esta
				pos = (val ? letras.indexOf(val) : i) + 1; 

				// Y si letra == "M" -> letras[pos] no existirá y usamos M
				insert = letra + (letras[pos] || 'M'); 

				// Insertamos el string
				res.push(insert);
			}
		} else {
			// Si no vamos a poner letra usamos un ""
			// para que no afecte pop
			res.push('');
		}
	}

	return res.join('');
}*/