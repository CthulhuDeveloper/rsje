function convertToCelsius() {
    let t = document.getElementById("temp").value
    let o = t*3.78541;
    document.getElementById("out").innerHTML = o.toFixed(2) + " litros";
}

function convertToFarenheit() {
    let t = document.getElementById("temp2").value
    let o = t*0.264172;
    document.getElementById("out2").innerHTML = o.toFixed(2) + " galones";
}