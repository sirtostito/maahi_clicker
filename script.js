// Counter App
let count = document.getElementById("count-el")
let plusButton = document.getElementById("enterButton")
let saveButton = document.getElementById("saveButton")
let saveScript = document.createElement("h2")
saveScript.innerHTML = "Last saved value(s): "
document.body.appendChild(saveScript)
function increment() {
    count++
    document.getElementById("count-el").innerHTML = count
}
function save() {
    saveScript.innerHTML += count + " "
}