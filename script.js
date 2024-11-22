const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function alertUser() {
    const alertUser = alert("Please input a value");
}

function reverseString(string) {
    return string.split("").reverse().join("");
}

function checkPalindrome(input) {
    const inputString = input.toLowerCase().replace(/[\W_]/g, '');
    const reversedString = reverseString(inputString);
    return inputString === reversedString;
}

checkBtn.addEventListener("click", () => {
    const input = textInput.value;
    if (!input) {
        alertUser();
    } else if (checkPalindrome(input)) {
        result.innerText = `${input} is a palindrome`;
    } else {
        result.innerText = `${input} is not a palindrome`;
    }
});