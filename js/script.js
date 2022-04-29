
const calculate_button = document.querySelector(".calculate-button")
calculate_button.addEventListener('click', BMI_calculation)

const warning_for_height = document.querySelector(".warning_for_height")
const warning_for_weight = document.querySelector(".warning_for_weight")

function BMI_calculation () {
    let bmi;
    let height = parseInt(document.getElementById("height").value)
    let weight = parseInt(document.getElementById("weight").value)
    const result = document.getElementById("result");




 //BMI_calculation
    if (height === "" || isNaN(height)) {
       warning_for_height.innerHTML = "Please enter height!"
       document.getElementById("height").style.border = "2px solid red"
    }


    if (weight === "" || isNaN(weight)) {
        warning_for_weight.innerHTML = "Please enter weight!"
        document.getElementById("weight").style.border = "2px solid red"
    }
    if (weight !== '' && height !== '') {
        bmi = (weight / ((height / 100) **2)).toFixed(2)
        result.innerHTML = bmi;
    }

    //Check result on NAN
    if (isNaN(result)){
        result.innerText = "0";
    }

    const status = document.getElementById('status')

// BMI_status
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

document.addEventListener('click', removeWarning)
//
// function removeWarning () {
//     warning_for_height.innerHTML = ""
//     document.getElementById("height").style.border = null;
// }