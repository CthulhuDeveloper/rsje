function convertToCelsius() {
    let t = document.getElementById("temp").value
    let o = t*1.13;
    document.getElementById("out").innerHTML = o.toFixed(2) + " dólares";
}

function convertToFarenheit() {
    let t = document.getElementById("temp2").value
    let o = t*0.89;
    document.getElementById("out2").innerHTML = o.toFixed(2) + " euros";
}