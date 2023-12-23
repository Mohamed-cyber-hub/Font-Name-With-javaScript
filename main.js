var myinput = document.getElementById("myinput")
var myinput2 = document.getElementById("myinput2")

var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var btn4 = document.getElementById("btn4")

myinput.addEventListener("keyup", () => {
    var text = myinput.value
    myinput2.innerHTML = text
})


btn1.addEventListener("click", () => {
    myinput2.className = "ch1"
    myspan.innerHTML = "Wallpoet"
})
btn2.addEventListener("click", () => {
    myinput2.className = "ch2"
    myspan.innerHTML = "ZCOOL"
})
btn3.addEventListener("click", () => {
    myinput2.className = "ch3"
    myspan.innerHTML = "Lobster"
})
btn4.addEventListener("click", () => {
    myinput2.className = "ch4"
    myspan.innerHTML = "Shadows Into Light"
})


