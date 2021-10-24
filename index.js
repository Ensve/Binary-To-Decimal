const mainForm = document.querySelector('.main_form');

const binaryInput = document.getElementById('binary');
const decimalInput = document.getElementById('decimal');

mainForm.addEventListener('submit', evt => {
    evt.preventDefault();

    // For elementene inni mainForm, se etter elementet med name binary. 
    const binaryValue = mainForm.elements['binary'].value;

    // splits a string into an array of substrings, and returns the new array.
    // Alert user hvis tallet ikke består kun av 1 og 0.
    binaryValue.split('').forEach(digit => {
        if (digit !== '0' && digit !== '1') {

            alert('Venligst tast kun inn gyldig binære tall.');
        }
    });

        // parseInt analyserer en string og returnerer som en integer
        const decimalValue = parseInt(binaryValue, 2);
        decimalInput.value = decimalValue;

});
