
function calculate_BMI() {

    var height = parseInt(document.querySelector("#height").value);
    var weight = parseInt(document.querySelector("#weight").value);
    var bmi = (weight / ((height * height) / 10000)).toFixed(2);

    var result = document.querySelector("#result");


    window.alert(bmi)

    interpret_bmi(bmi)




}
function interpret_bmi(b) {
    if (b < 18.5)
        window.alert("UnderWeight")
    else if (b >= 18.5 && b < 25)
        window.alert("Normal weight")
    else if (b >= 25 && b < 30)
        window.alert("Over weight")
    else
        window.alert("Obses")

}
