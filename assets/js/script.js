const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const icon = document.getElementById("icon");

let savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  body.classList.add(savedTheme);
  icon.textContent = savedTheme === "dark" ? "☀️" : "🌙";
} else {
  body.classList.add("light");
}

toggleBtn.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.replace("light", "dark");
    icon.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.replace("dark", "light");
    icon.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});