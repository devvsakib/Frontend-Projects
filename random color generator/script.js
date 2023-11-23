const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
let hexcode = "#41b3a3"
function initialColor() {
    document.body.style.background = hexcode
    document.getElementById("title").innerHTML = hexcode
}
function colorGenerator() {
    const hexarray = []
  
    for (i = 0; i < 6; i++) {
      const random = Math.floor(Math.random() * 16)
      hexarray.push(hex[random])
    }
    hexcode = "#" + hexarray.join("")
    document.body.style.background = hexcode
    document.getElementById("title").innerHTML = hexcode
    document.getElementById("copy").style.color = "black"
}
function copy() {
    const copyText = document.getElementById("title").innerHTML
    navigator.clipboard.writeText(copyText)
    document.getElementById("copy").style.color = hexcode
  }
