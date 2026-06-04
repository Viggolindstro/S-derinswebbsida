function toggleDarkMode() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {

    localStorage.setItem("theme", "dark");
    localStorage.setItem("lastVisit", Date.now());

  } else {

    localStorage.setItem("theme", "light");

  }

}
document.querySelector("#theme-toggle").addEventListener("click", toggleDarkMode);
function loadTheme() {

  const theme = localStorage.getItem("theme");

  if (theme === "dark") {

    document.body.classList.add("dark");

  }

}

loadTheme();
const TEN_SECONDS = 1000 * 10 // 10 sekunder i millisekunder

const lastVisit = localStorage.getItem("lastVisit");
if (lastVisit) {
  const now = Date.now();
  const timePassed = now - lastVisit;

  if (timePassed > TEN_SECONDS) {
    localStorage.removeItem("theme");
    localStorage.removeItem("lastVisit");
  }
}