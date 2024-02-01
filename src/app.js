const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")
const crossI = document.querySelector("#crossI")
const threeLine1 = document.querySelector("#three-line1")
const threeLine2 = document.querySelector("#three-line2")
const threeLine3 = document.querySelector("#three-line3")



hamburger.addEventListener("click", ()=>{
  menu.classList.toggle("hidden")
  hamburger.classList.toggle("text-white")
  crossI.classList.toggle("hidden")
  threeLine1.classList.toggle("hidden")
  threeLine2.classList.toggle("hidden")
  threeLine3.classList.toggle("hidden")
})

hLinks.forEach(link=>{
  link.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
  })
})

moon.addEventListener("click", ()=>{
  body.classList.toggle("dark")
})
