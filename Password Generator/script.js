let inputSlider = document.getElementById('inputSlider');
let sliderValue = document.getElementById('sliderValue');
let passBox = document.getElementById('passBox');
let lowercase = document.getElementById('lowercase');
let uppercase = document.getElementById('uppercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let genBtn = document.getElementById('genBtn');
let copyIcon = document.getElementById('copyIcon');

sliderValue.textContent = inputSlider.value; //default value

inputSlider.addEventListener('input',()=>{
    sliderValue.textContent = inputSlider.value;
})

genBtn.addEventListener('click',()=>{
    passBox.value = generatePassword();
});

let upperChars = "ABCDEFGHIJKLMNNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let numberChars = "0123456789";
let symbolChars = "!@#$%^&*()-+";

function generatePassword(){
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? numberChars : "";
    allChars += symbols.checked ? symbolChars : "";

    for(let i = 1; i <= inputSlider.value; i++){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    return genPassword;
}

copyIcon.addEventListener('click', () => {
    if(passBox.value != "" || passBox.value.length > 0){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check"; // Change icon to check_circle
        copyIcon.title = "Password Copied";

        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";

        },4000);
    }
});