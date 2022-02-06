// click a button that darkens the site and changes styling
// listen for button click

const modeButton = document.querySelector(".viewModeButton");
const bodyDark = document.querySelector("body")
const indexGallery = document.querySelector(".gallery")
const indexAbout = document.querySelector(".aboutContainer")
const indexHeader = document.querySelector(".mainHeader")
const indexLocations = document.querySelector("locations")

modeButton.addEventListener("click", function() {
    indexHeader.classList.toggle("indexHeaderDarkMode")
    bodyDark.classList.toggle("darkModeGeneral")
    indexGallery.classList.toggle("galleryDarkMode")
    indexAbout.classList.toggle("indexAboutDarkMode")

    const indexImages = document.querySelectorAll("IMG")
    for (let i = 0; i < indexImages.length; i++)
        indexImages[i].classList.toggle("indexImageDarkMode")
});

