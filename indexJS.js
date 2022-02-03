// click a button that darkens the site and changes styling
// listen for button click

const modeButton = document.querySelector(".viewModeButton");
const bodyDark = document.querySelector("body")

modeButton.addEventListener("click", function() {
    bodyDark.classList.toggle("darkModeGeneral")
});

