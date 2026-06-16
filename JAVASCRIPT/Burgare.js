// Sätter total och ingredienser till 0 från början för att undvika att gammalt värde finns kvar.
let total = 0;
let ingredients = [];

//Hämtar element från HTML
const ingredientList = document.querySelector("#ingredient-list");
const totalText = document.querySelector("#total");

function updateIngredientList() {
    //Gör listan tom från början
    ingredientList.innerHTML = "";

    ingredients.forEach(ingredient => {
        // Skapar en li tagg med variablet ingredient inuti
        const li = document.createElement("li")
        li.textContent = ingredient;
        //Lägger till li taggen i HTML
        ingredientList.appendChild(li);
    });
}

function updateTotal(amount) {
    total+= amount;

    if (total < 0) {
        total = 0;
    }

    totalText.textContent = total;
    updateOrderButton();
}

document.querySelectorAll(".plus, .minus").forEach(button => {
    //Kollar vilken knapp som klickats på, och uppdaterar totalen baserat på det.
    button.addEventListener("click", () => {
        const price = Number(button.dataset.price);
        const isPlus = button.classList.contains("plus");
        const name = button.dataset.name;

        if(isPlus) {
            ingredients.push(name);
            updateTotal(price);
        } else {
            const index = ingredients.indexOf(name);

            if (index!== -1) {
                ingredients.splice(index, 1);
                updateTotal(-price);
            }
        }

        updateIngredientList();
        updateOrderButton();
    });
});
const orderButton = document.querySelector(".orderbutton");
const orderMessage = document.querySelector("#order-message");


orderButton.addEventListener("click", () => {
    orderMessage.textContent = "Din beställning är på väg!";
     // Rensar all data
    total = 0;
    ingredients = [];

    // Rensar all text
    totalText.textContent = total;
    updateIngredientList();
    updateOrderButton();

    //Tar bort meddelandet "Din beställning är på väg!" efter tre sekunder
    setTimeout(() => {
        orderMessage.textContent = "";
    }, 3000);
});

// Tar bort knappen ifall du inte lagt in några ingredienser
function updateOrderButton() {
    orderButton.disabled = total === 0;
}
updateOrderButton();