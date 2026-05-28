let total = 0;
const plusButtons = document.querySelectorAll(".plus");
const minusButtons = document.querySelectorAll(".minus");
const totalText = document.querySelector("#total");

function updateTotal(amount) {
    total += amount;
    if(total < 0) {
        total = 0;
    }
    totalText.textContent = total;
}

document.querySelectorAll(".plus, .minus").forEach(button => {
    button.addEventListener("click", () => {
        const price = Number(button.dataset.price);
        const isPlus = button.classList.contains("plus");

        updateTotal(isPlus ? price : -price);
    });
});