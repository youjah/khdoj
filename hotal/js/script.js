let navbar = document.querySelector(".navbar");
let menu = document.getElementById("menu");

menu.addEventListener("click", (e) => {
    navbar.classList.toggle("active");
})


window.onscroll = () => {
    navbar.classList.remove("active");
}

const user = document.getElementById("user");
const containerUser = document.querySelector(".container-user");

user.addEventListener("click", (e) => {
    containerUser.classList.toggle("active");
})

window.onscroll = () => {
    containerUser.classList.remove("active");
}