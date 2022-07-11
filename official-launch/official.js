console.dir(document);

let buttonElement = document.getElementById('get-started');
let paragraphElement = document.querySelector('.paragraph-2')
let getAppElement = document.getElementById('get-app');
let charsCountElement = document.getElementById('first-input');
let remainingCharsElement = document.getElementById('charachters');
let bodyElement = document.body;

let maxAllowedChars = charsCountElement.maxLength;

function updateCharsElement(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remainingChars = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingChars;

    if (remainingChars <= 11) {
        remainingCharsElement.classList.add('input-color');
        charsCountElement.classList.add('firstinput')
    } else {
        remainingCharsElement.classList.remove('input-color');
        charsCountElement.classList.remove('firstinput')
    }
}

function updateButtonElement() {
    buttonElement.textContent = 'Verifying.....';
    bodyElement.style.backgroundColor = 'black';
    bodyElement.style.color = 'white'
}

function updateGetAppElement() {
    getAppElement.textContent = 'We are sorry. App is not ready yet. We\'re working on it.';
    getAppElement.style.color = 'white';
}

buttonElement.addEventListener('click', updateButtonElement);
getAppElement.addEventListener('click', updateGetAppElement);
charsCountElement.addEventListener('input', updateCharsElement);