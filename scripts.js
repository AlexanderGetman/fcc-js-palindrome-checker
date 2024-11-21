const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function alertUser() {
    const alertUser = alert("Please input a value");
}

checkBtn.addEventListener("click", () => {
    if (!textInput.value) {
        alertUser();
    }
});