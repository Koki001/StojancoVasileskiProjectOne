
const blogForm = document.querySelector("form")
let nameInput = document.querySelector("input[type=text]")
let emailInput = document.querySelector("input[type=email]")
let textInput = document.querySelector("textarea")

blogForm.addEventListener("submit", submitClick)

function submitClick(event) {
    event.preventDefault();
    
    if (nameInput.value == "") {
        alert("Please enter your name")
    } else if (emailInput.value == "") {
        alert("Please enter your email")
    } else if (textInput.value == "") {
        alert("The message field is empty")
    } else {
        alert(`Thanks for submitting your message ${nameInput.value}`)
        scroll(0, 0)
        const userName = nameInput.value
        const userEmail = emailInput.value
        
        const newMessage = `Hey ${userName}! We've sent a copy of your message to ${userEmail}`
        
        const newDiv = document.createElement("div")
        newDiv.classList.add("newParagraphContainer")
        console.log(newDiv)
        
        const newParagraph = document.createElement("h2")
        newParagraph.classList.add("blogSubmitPrompt")
        newParagraph.textContent = newMessage
        
        newDiv.appendChild(newParagraph)
        
        const headerCont = document.querySelector("header")
        headerCont.appendChild(newDiv)
        
        document.body.addEventListener("click", divErase)
        console.log(divErase)
        nameInput.value = ""
        emailInput.value = ""
        textInput.value = "" 
        
        function divErase() {
            document.querySelector(".blogSubmitPrompt").style.display = "none"
            location.reload()
        }
    }
}














// location.href = "./blog.html"