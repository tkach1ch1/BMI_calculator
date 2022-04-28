
const calculate_button = document.querySelector(".calculate-button")
calculate_button.addEventListener('click', BMI_calculation)


function BMI_calculation () {
    let bmi;
    let height = parseInt(document.getElementById("height").value)
    let weight = parseInt(document.getElementById("weight").value)
    const result = document.getElementById("result");
    const warning_for_height = document.querySelector(".warning_for_height")
    const warning_for_weight = document.querySelector(".warning_for_weight")

    if (height === "" || isNaN(height)) {
       warning_for_height.innerHTML = "Please enter height!"
       document.getElementById("height").style.border = "2px solid red"

    } else if (weight === "" || isNaN(weight)) {
        warning_for_weight.innerHTML = "Please enter weight!"
        document.getElementById("weight").style.border = "2px solid red"
    } else {
        bmi = (weight / ((height / 100) **2)).toFixed(2)
        result.innerHTML = bmi;
    }

    const status = document.getElementById('status')


    if (bmi < 18.5) {
        status.innerText = 'Underweight';
    } else if (18.5 <= bmi && bmi <= 24.9) {
        status.innerText = 'Healthy weight';
    } else if (25.0 <= bmi && bmi <= 29.9) {
        status.innerText = 'Overweight';
    } else if (bmi > 30.0) {
        status.innerText = 'Obese';
    }
}
