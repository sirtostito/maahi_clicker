// Counter App
let count = document.getElementById("count-el")
let plusButton = document.getElementById("increment-btn")
let saveButton = document.getElementById("save-btn")
let saveScript = document.createElement("p")
saveScript.innerHTML = "Saved value(s): "
function increment() {
    count++
    document.getElementById("count-el").innerHTML = count
}
function save() {
    saveScript.innerHTML += count + " - "
    document.getElementById("save-el").innerHTML = saveScript.innerHTML
}