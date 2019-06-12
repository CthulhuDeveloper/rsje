function convertToCelsius() {
    let t = document.getElementById("temp").value
    let o = t*57.295779513;
    document.getElementById("out").innerHTML = o.toFixed(2) + "°";
}

function convertToFarenheit() {
    let t = document.getElementById("temp2").value
    let o = t*0.01745329252;
    document.getElementById("out2").innerHTML = o.toFixed(2) + " radianes";
}