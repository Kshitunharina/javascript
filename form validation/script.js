function validateForm() {
    var x = document.forms["Forms"]["fname"].value;
    if (x == "") {
        alert("PLEASE INSERT YOUR NAME!!");
        return false;
    }
    return true;
}