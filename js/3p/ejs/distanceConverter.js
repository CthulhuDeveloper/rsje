function convertToCelsius() {
    let t = document.getElementById("temp").value
    let o = t*0.621371;
    document.getElementById("out").innerHTML = o.toFixed(2) + " millas";
}

function convertToFarenheit() {
    let t = document.getElementById("temp2").value
    let o = t*1.60934;
    document.getElementById("out2").innerHTML = o.toFixed(2) + " km";
}