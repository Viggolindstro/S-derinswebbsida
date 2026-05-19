

const nameInput = document.querySelector("#name");
const form = document.querySelector("#contactForm");
const successP = document.querySelector("#success");
const messageInput = document.querySelector("#message");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = nameInput.value;
    const message = messageInput.value;

if (name === "" || message === "") {
        successP.textContent = "Vänligen fyll i alla fält.";
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
});