// Gives two red warnings at the same time if both fields are empty

const calculate_button = document.querySelector(".calculate-button")
// calculate_button.addEventListener('click',  emptyHeight)
// calculate_button.addEventListener('click',  emptyWeight)

calculate_button.onclick (function () {
    emptyHeight();
    emptyWeight();
})


function emptyHeight () {
    let height = parseInt(document.getElementById("height").value)
    const warning_for_height = document.querySelector(".warning_for_height")
    if (height === "" || isNaN(height)) {
        warning_for_height.innerHTML = "Please enter height!"
        document.getElementById("height").style.border = "2px solid red"
    }
}
function emptyWeight () {
    let weight = parseInt(document.getElementById("weight").value)
    const warning_for_weight = document.querySelector(".warning_for_weight")
    if (weight === "" || isNaN(weight)) {
        warning_for_weight.innerHTML = "Please enter weight!"
        document.getElementById("weight").style.border = "2px solid red"
    }
}
