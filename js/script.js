const givenNumbers = document.querySelectorAll(".number_button" );
const resultField= document.querySelector(".result-field");
let BMI_result = 0;

for (let i = 0; i < givenNumbers.length; i++) {
    givenNumbers[i].addEventListener('.number-button', function (){
        if (firstInput.value !== '' && secondInput.value !== '' ) {
            BMI_result = secondInput / ((firstInput / 100)** 2)
            resultField.textContent = BMI_result;
        }
    })
}

