

function calcular(){
    //Primer fracción
    let n1 = document.getElementById('n1').value; 
    let d1 = document.getElementById('d1').value; 
    //Segunda fracción
    let n2 = document.getElementById('n2').value; 
    let d2 = document.getElementById('d2').value; 

    f1 = new Fraction(n1, d1);
    f2 = new Fraction(n2, d2);

    operation = document.getElementById('operation').value;
    console.log(operation);
    switch(operation){
        case '+':
            f3 = f1.sum(f2);
            document.getElementById('n3').value = f3.getN();
            document.getElementById('d3').value = f3.getD();
            break;
        case '-':
            f3 = f1.subt(f2);
            document.getElementById('n3').value = f3.getN();
            document.getElementById('d3').value = f3.getD();
            break;
        case '*':
            f3 = f1.mul(f2);
            document.getElementById('n3').value = f3.getN();
            document.getElementById('d3').value = f3.getD();
            break;
        case '/':
            f3 = f1.div(f2);
            document.getElementById('n3').value = f3.getN();
            document.getElementById('d3').value = f3.getD();
                break;
    }
}

