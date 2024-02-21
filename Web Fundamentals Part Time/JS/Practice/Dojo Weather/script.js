console.log("Page loading...")

var cookieBoxes = document.querySelector('.cookie-policy')

function loading(){
    alert("Loading weather report")
}

function accept(){
    cookieBoxes.remove();
}



// We need to convert Â°C in Â°F
function degreeInFahrenheit(temp){
    return Math.round((9 / 5) * temp + 32);
}

// We need to convert Â°F in Â°C
function fahrenheitInDegreeCelsius(temp){
    return Math.round(((temp - 32) * 5) / 9);
}



// Our convert function 

function convert(element) {
    console.log(element.value)

    for(var i=1; i<9; i++){
        var tempSpan = document.querySelector('#temp' +i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C"){
            tempSpan.innerText = fahrenheitInDegreeCelsius(tempVal)
        }

        else {
            tempSpan.innerText = degreeInFahrenheit(tempVal)
        }
    }
}