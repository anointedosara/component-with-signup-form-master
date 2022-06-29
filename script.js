let div6 = document.getElementsByClassName("div6")
for (let i = 0; i < div6.length; i++) {
    div6[i].addEventListener("click", () => {
        div6[i].classList.add("border")

        for (let j = 0; j < div6.length; j++) {
            if (i != j) {
                div6[j].classList.remove("border")
            }
        }
    })
}

let input = document.getElementsByClassName("input")
let form = document.getElementById("form")
let img = document.getElementsByClassName("img")
let div7 = document.getElementsByClassName("div7")

for (let i = 0; i < input.length; i++) {
    form.addEventListener("submit", (e) => {
        if (input[i].value == "") {
            e.preventDefault()
            div6[i].classList.add("bord")
            div6[i].style.marginBottom = 0
            img[i].style.display = "block"
            div7[i].style.display = "block"
            div7[0].innerHTML = "Firstname cannot be empty"
            div7[1].innerHTML = "Lastname cannot be empty"
            div7[2].innerHTML = "Looks like this is not an email"
            div7[3].innerHTML = "Password cannot be empty"
        }

        if (input[i].value != "") {
            div6[i].classList.remove("bord")
            div6[i].style.marginBottom = "30px"
            img[i].style.display = "none"
            div7[i].style.display = "none"
        }

        function validateEmail(emailId) {
            result = emailId.value.includes("@gmail.com") || emailId.value.includes("@yahoo.com") || emailId.value.includes("@outlook.com")
            if (result) {
                div6[2].classList.remove("bord")
                div6[2].style.marginBottom = "30px"
                img[2].style.display = "none"
                div7[2].style.display = "none"
            } else {
                div6[2].classList.add("bord")
                div6[2].style.marginBottom = 0
                div7[2].innerHTML = "Looks like this is not an email"
                div7[2].style.display = "block"
                img[2].style.display = "block"
            }
        }

        let emailId = document.getElementById("input")
        validateEmail(emailId)


    })
}

form.addEventListener("submit", () => {
    if (input[0].value != "" && input[1].value != "" && input[2].value != "" && input[3].value != "") {
        alert("Congrats! You will hear from us shortly via the email you provided.")
    } else {
        alert("Complete the form to claim your Free Trial")
    }
})