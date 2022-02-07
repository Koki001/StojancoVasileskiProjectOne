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










// gallery carousel

const carouselTrack = document.querySelectorAll(".gallerySlide")
console.log(carouselTrack)

const buttonNext = document.querySelector(".nextImage")
const buttonPrevious = document.querySelector(".previousImage")

let i = 1

function nextClick() {

        if (i == 1 || i == 0) {
            carouselTrack[i].classList.remove("currentImage")
            carouselTrack[i].classList.add("rightImage")
            ++i
            carouselTrack[i].classList.add("currentImage")
            carouselTrack[i].classList.remove("rightImage")
        console.log(i)
    }
}

function previousClick() {

        if (i <= 2 && i != 0) {
        carouselTrack[i].classList.remove("currentImage")
        --i
        carouselTrack[i].classList.add("currentImage")
        console.log(i)
    } else {
        // i == 1
        return i = 0
    } 
}


buttonNext.addEventListener("click", nextClick)
buttonPrevious.addEventListener("click", previousClick)
