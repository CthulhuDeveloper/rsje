//
// this may be a class, object, module, or function
//
function convertToCelsius() {
    let t = document.getElementById("temp").value
    let o = (t-32)/1.8
    document.getElementById("out").innerHTML = o.toFixed(2) + " °C";
}

function convertToFarenheit() {
    let t = document.getElementById("temp2").value
    let o = (t*1.8)+32
    document.getElementById("out2").innerHTML = o.toFixed(2) + " °F"
}