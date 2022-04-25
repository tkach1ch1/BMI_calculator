const input = document.querySelectorAll("number_button" );
const resultField= document.querySelector();
let BMI_result = 0;

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('number-button', function (){
        if (firstInput.value !== '' && secondInput.value !== '' ) {
            BMI_result = secondInput / ((firstInput / 100)** 2)
            resultField.textContent = BMI_result;
        }
    })
}