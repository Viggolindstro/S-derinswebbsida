//Sätter på/Stänger av Dark-mode när man klickar
function toggleDarkMode() {
  document.body.classList.toggle("dark");
//Om dark-mode är på, sätt theme till dark och last visit till tiden som är just nu
  if (document.body.classList.contains("dark")) {

    localStorage.setItem("theme", "dark");
    localStorage.setItem("lastVisit", Date.now());

  } else {
//Om dark mode är av sätt theme till light
    localStorage.setItem("theme", "light");

  }

}
//När #theme-toggle klickas kör toggleDarkMode()
document.querySelector("#theme-toggle").addEventListener("click", toggleDarkMode);
function loadTheme() {
//Hämtar den theme som är aktiv
  const theme = localStorage.getItem("theme");
//Om theme är dark byt till dark, eftersom theme sparas i browser storage så när du refreshar är det kvar
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
//Om tio sekunder har passerat, ta bort dark-mode
  if (timePassed > TEN_SECONDS) {
    localStorage.removeItem("theme");
    localStorage.removeItem("lastVisit");
  }
}