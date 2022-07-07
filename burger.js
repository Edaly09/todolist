// constente et variables

const openBurger = document.getElementById("burger")
const burgerIcone = document.getElementById("burgermenu")

// menuburger

const burgerOpen = () =>{
    openBurger.classList.remove("Naffiche")
    openBurger.classList.add("affiche")
    burgerIcone.classList.add("Naffiche")
    burgerIcone.classList.remove("burgermenu")
}

const burgerClose = () =>{
    openBurger.classList.remove("affiche")
    openBurger.classList.add("Naffiche")
    burgerIcone.classList.add("afficheburgermenu")
    burgerIcone.classList.remove("Naffiche")
}