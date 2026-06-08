const btn = document.getElementById("welcomeBtn");

btn.addEventListener("click", function () {
    alert("Welcome to my Portfolio!");
});
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
const changeBtn = document.getElementById("changeTextBtn");

changeBtn.addEventListener("click", function () {
    document.getElementById("aboutText").textContent =
        "I am learning Frontend Development and building projects.";
});
const heading = document.querySelector("h1");

heading.addEventListener("mouseover", function () {
    heading.textContent = "Welcome!";
});

heading.addEventListener("mouseout", function () {
    heading.textContent = "Mridul Krishan";
});
