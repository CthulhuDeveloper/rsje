function getValue(){
    let num = document.getElementById('num').value;
    let vec = [];
    for(let i = 0; i < num; i++)
        vec.push(Math.floor(Math.random() * 100) / 100 );
    document.getElementById('textarea2').value = vec;
}

function getAleatorios(){
    let num = document.getElementById('num').value;
    let vec = [];
    for(let i = 0; i < num; i++)
        vec.push(Math.floor(Math.random() * 10) + 1);

    document.getElementById('textarea').value = vec;
    Max(vec);
    Min(vec);
    Avg(vec);
}

function Max(vec){
    let num = document.getElementById('num').value;
    let max = vec[0];
    console.log(vec)
    for(let i = 0; i < num; i++){
        if(vec[i] > max)
            max = vec[i];
    }    
    console.log(max);
    document.getElementById('max').value = max;
}

function Min(vec){
    let num = document.getElementById('num').value;
    let min = vec[0];
    for(let i = 0; i < num; i++){
        if(vec[i] < min)
            min = vec[i];
    }    
    console.log(min);
    document.getElementById('min').value = min;
}

function Avg(vec){
    let num = document.getElementById('num').value;
    let sum = 0;
    for(let i = 0; i < num; i++){
        sum += vec[i];
    } 
    console.log(sum);
    document.getElementById('avg').value = (sum/num);
}