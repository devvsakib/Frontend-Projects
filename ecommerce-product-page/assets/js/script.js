const cartItems = document.getElementById('cart_items'),
    prod_increase = document.getElementById('prod_increase')
    prod_decrease = document.getElementById('prod_decrease'),
prod_quanty = document.getElementById('prod_quanty')

function showOff(params) {
    cartItems.classList.toggle("showoff");
}
let quanty = 0
prod_increase.addEventListener('click', () => {
    // quanty++
    quanty++
    prod_quanty.innerText = quanty
})
prod_decrease.addEventListener('click', () => {
    // quanty++
    quanty--
    if (quanty < 0 ){
        quanty = 0
    }
    prod_quanty.innerText = quanty
})