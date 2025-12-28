function validateForm() {
    var x = document.forms["First"]["fname"].value;
    if (x == "") {
        alert("PLEASE INSERT YOUR NAME!!");
        return false;
    }
    return true;
}

// yes
const form = document.getElementById("APIForms");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (form.checkValidity()) {
        message.style.color = "green";
        message.textContent = "Thanks for signing up! 👍";
    }
    else {
        // yes
        message.style.color = "red";
        message.textContent = "⚠️ Please fill out the fields correctly! ⚠️";
    }
})