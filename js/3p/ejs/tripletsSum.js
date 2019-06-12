function getValue(){
    let valor = document.getElementById("textarea").value;
    let vec = valor.split(' ');
    console.log(vec);

    let contador = 0;

    for(let k = 0; k < vec.length; k++){
        for(let t = 1; t < vec.length-1; t++){
            for(let i = 2; i < vec.length-2; i++){
                if((vec[k]+vec[t]+vec[i])==0)
                contador++;
            }            
        }            
    }  
    console.log(contador);
}