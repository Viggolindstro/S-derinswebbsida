let total = 0;
let ingredients = [];

const ingredientList = document.querySelector("#ingredient-list");
// Sätter total till 0 från början för att undvika att gammalt värde finns kvar.
const plusButtons = document.querySelectorAll(".plus");
const minusButtons = document.querySelectorAll(".minus");
const totalText = document.querySelector("#total");

function updateTotal(amount) {
    total += amount;
    //Gör så att värdet aldrig kan gå under 0, så att det inte blir negativt.
    if(total < 0) {
        total = 0;
    }
    totalText.textContent = total;
    updateOrderButton();
}

function updateIngredientList() {
    ingredientList.innerHTML = "";

    ingredients.forEach(ingredient => {
        const li = document.createElement("li")
        li.textContent = ingredient;
        ingredientList.appendChild(li);
    });
}

document.querySelectorAll(".plus, .minus").forEach(button => {
    //Kollar vilken knapp som klickats på, och uppdaterar totalen baserat på det.
    button.addEventListener("click", () => {
        const price = Number(button.dataset.price);
        const isPlus = button.classList.contains("plus");
        const name = button.dataset.name;

        if(isPlus) {
            ingredients.push(name);
            total+= price;
        } else {
            const index = ingredients.indexOf(name);

            if (index!== -1) {
                ingredients.splice(index, 1);
                total -= price;
            }
        }

        totalText.textContent = total;
        updateIngredientList();
        updateOrderButton();
    });
});
const orderButton = document.querySelector(".orderbutton");
const orderMessage = document.querySelector("#order-message");


orderButton.addEventListener("click", () => {
    if (total === 0) {
        return;
    }
    orderMessage.textContent = "Din beställning är på väg!";

    setTimeout(() => {
        orderMessage.textContent = "";
    }, 3000);
});

// Tar bort knappen ifall du inte lagt in några ingredienser
function updateOrderButton() {
    orderButton.disabled = total === 0;
}
updateOrderButton();