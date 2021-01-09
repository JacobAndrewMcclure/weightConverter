let poundWeight;
let kiloWeight;
//allows the user to hit enter to execute conversion
let input = document.getElementById("userWeight");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("myBtn").click();
    }
});

function calcWeight() {
    //gets value of user input
    poundWeight = document.getElementById("userWeight").value;
    //converts user input into number from string
    poundWeight = parseFloat(poundWeight);
    //Multiple user input to get kilograms
    kiloWeight = poundWeight * 0.45359237;
    //Rounds to nearest 2nd decimal point
    kiloWeight = kiloWeight.toFixed(2);
    
    if (kiloWeight == "NaN") {
        //if answer is not a number it will display message
        document.getElementById("weightDisplay").innerHTML = "Not a valid input!";
    } else {
        //if answer is a number it will display number
        document.getElementById("weightDisplay").innerHTML = kiloWeight + "kg";
    }
}