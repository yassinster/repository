alert("Welcome to the page");

let firstname = 'yassin';
console.log(firstname);

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const signUpLogInBtn = document.getElementById("signUpLogInBtn");
    const closeBtn = document.getElementsByClassName("close-btn")[0];

    signUpLogInBtn.onclick = function() {
        modal.style.display = "block";
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});