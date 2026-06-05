

const nameInput = document.querySelector("#name");
const form = document.querySelector("#contactForm");
const successP = document.querySelector("#success");
const messageInput = document.querySelector("#message");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = nameInput.value;
    const message = messageInput.value;

    //Kollar så att alla fält är ifyllda, så att det inte skickas in tomma meddelanden.
if (name === "" || message === "") {
        successP.textContent = "Vänligen fyll i alla fält.";
        successP.style.color = "red";  
        return;
    }
       if (!isValidEmail(email)) {
        successP.textContent = "Vänligen skriv en giltig e-postadress.";
        successP.style.color = "red";
        return;
    }
    console.log(name, message);
    successP.textContent = "Tack för ditt meddelande!";
    successP.style.color = "green";
    // Tar bort namnet
    nameInput.value = "";
    // Tar bort meddelandet
    messageInput.value = "";

    emailInput.value = "";
});
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}