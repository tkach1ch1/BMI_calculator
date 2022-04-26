
const calculate_button = document.querySelector(".calculate-button")
calculate_button.addEventListener('click', BMI_calculation)





function BMI_calculation () {
    let height = parseInt(document.getElementById("height").value)
    let weight = parseInt(document.getElementById("weight").value)
    const result = document.getElementById("result");
    const warning_for_height = document.querySelector(".warning_for_height")
    const warning_for_weight = document.querySelector(".warning_for_weight")

    if (height === "" || isNaN(height)) {
       warning_for_height.innerHTML = "Please enter height"
       document.getElementById("height").style.border = "2px solid red"

    } else if (weight === "" || isNaN(weight)) {
        warning_for_weight.innerHTML = "Please enter weight"
        document.getElementById("weight").style.border = "2px solid red"
    } else {
        let bmi = (weight / ((height / 100) **2)).toFixed(2)
        result.innerHTML = bmi;
    }
}
