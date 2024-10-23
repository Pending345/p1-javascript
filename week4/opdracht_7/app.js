

let output = document.getElementById("output")

let budget = 100

let product = 60

function geld() {
    if (budget > product) {
        output.innerText="U heeft genoeg geld!"
        output.style.color='green'
    }

    else {
        output.innerText="Helaas, te weinig geld!"
        output.style.color='red'
    }
}