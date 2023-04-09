const name = document.querySelector(".contact_form input[type='text']")
const mail = document.querySelector(".contact_form input[type='email']")
const textArea = document.querySelector(".contact_form textarea")

const validate = ()=> {
    if(name.value.trim()==="") {
        return alert("Please enter your name")
    }
    if(textArea.value.trim()==="") {
        return alert("Please enter a message")
    }
    alert("Message sent successfully!")
}