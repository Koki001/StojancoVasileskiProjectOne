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

const carouselTrack = Array.from(document.querySelectorAll(".gallerySlide"))
console.log(carouselTrack)

const buttonNext = document.querySelector(".nextImage")
const buttonPrevious = document.querySelector(".previousImage")
const imageLeft = document.getElementById("imageLeft")
const imageMiddle = document.getElementById("imageMiddle")
const imageRight = document.getElementById("imageRight")

const liLeft = document.querySelector(".liLeft")
const liMiddle = document.querySelector(".liMiddle")
const liRight = document.querySelector(".liRight")


let i = 1
console.log(i)
// testing one type of looping
function nextClick() {

    if (i < 2) {
        carouselTrack[i].classList.remove("currentImage")
        carouselTrack[++i].classList.add("currentImage")
        liLeft.style.order = `${i + 1}`;
        console.log(liLeft.style.order)
        liMiddle.style.order = `${i - 1}`;
        console.log(liMiddle.style.order)
        liRight.style.order = `${i}`;
        console.log(liRight.style.order)
        i++
        console.log(i)
    } else if (i = 2) {
        carouselTrack[i].classList.remove("currentImage")
        carouselTrack[i - 2].classList.add("currentImage")
        liLeft.style.order = `${i}`;
        console.log(liLeft.style.order)
        liMiddle.style.order = `${i + 1}`;
        console.log(liMiddle.style.order)
        liRight.style.order = `${i - 1}`;
        console.log(liRight.style.order)
        i++
        console.log(i)
    }
}
// testing another type of looping
function previousClick() {

    if (i <= 2 && i != 0) {
        i--
        imageMiddle.src = "./assets/gallery-image-" + (i + 1) + ".jpg"
        console.log(i)
    } else if (i == 0) {
        i = 2
        imageMiddle.src = "./assets/gallery-image-" + (i + 1) + ".jpg"
        console.log(i, "previous button reset")
    }


    //     if (i <= 2 && i != 0) {
    //     // carouselTrack[i].classList.remove("currentImage")
    //     --i
    //     // carouselTrack[i].classList.add("currentImage")
    //     console.log(i)
    // }
}


buttonNext.addEventListener("click", nextClick)
buttonPrevious.addEventListener("click", previousClick)
