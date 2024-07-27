const cartItems = document.getElementById('cart_items'),
    prod_increase = document.getElementById('prod_increase'),
    prod_decrease = document.getElementById('prod_decrease'),
    more_img = document.getElementById('more_img'),
    prev_img = document.getElementById('prev_img'),
    add_to_cart = document.getElementById('add_to_cart'),
    del_item = document.getElementById('del_item'),
    qualty_number = document.querySelector('#qualty_number'),
    for_prev_demo = document.querySelectorAll('.for_prev_demo'),
    prod_quanty = document.getElementById('prod_quanty');

function showOff() {
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
    if (quanty < 0) {
        quanty = 0
    }
    prod_quanty.innerText = quanty
})

///   Product Demo Images    ///
for_prev_demo.forEach(element => {
    element.addEventListener('click', () => {
        prev_img.src = element.src
        for_prev_demo.forEach(element => {
            element.classList.remove('active')
            event.target.classList.add('active')
        })
    })
})


// for_prev_demo.forEach(element => {
//     element.addEventListener('click', (e) => {
//         prev_img.src = element.src
//         e.classList.remove('active')
//         event.target.classList.add('active')
//     })
// })
///  Cart Product Add Systems ///
add_to_cart.addEventListener('click', () => {
    let getNumberOfQuant = prod_quanty.innerText
    getNumberOfQuant = Number.parseInt(getNumberOfQuant, 10)
    actualPrice = parseFloat(125.00)
    totalPrice = actualPrice * getNumberOfQuant
    let cartHtml = `
            <div class="cart_title">
            <h2 id="hhh">Cart</h2>
            </div>
            <div class="items">
            <div class="item_img">
            <img src="./assets/images/image-product-1.jpg" alt="">
            </div>
            <div class="item_des">
            <div class="item_title">
            <h5>Fall Limited Edition Sneakers</h5>
            </div>
            <div class="item_quantity">
            <span>$125.00 x ${getNumberOfQuant} <span class="" bold_price>$${totalPrice}.00</span></span>
            </div>
            </div>
            <div class="item_delete">
            <i id="del_item" class="fa-solid fa-trash"></i>
            </div>
            </div>
            <div class="cart_btn">
            <button>Checkout</button>
            </div>
            `

    cartItems.innerHTML = ''
    cartItems.innerHTML += cartHtml
    qualty_number.style.display = 'block'
    qualty_number.innerText = getNumberOfQuant

    del_item.addEventListener('click', () => {
        console.log(123);
    })

})
// if (del_item) {




console.log(2342);
// add_to_cart.addEventListener('click', () => {
//     let getNumberOfQuant = prod_quanty.innerText
//     getNumberOfQuant = Number.parseInt(getNumberOfQuant, 10)
//     actualPrice = parseFloat(125.00)
//     totalPrice = actualPrice * getNumberOfQuant
//     let cartHtml = `
//         <div class="cart_title">
//             <h2>Cart</h2>
//         </div>
//         <div class="items">
//         <div class="item_img">
//           <img src="./assets/images/image-product-1.jpg" alt="">
//         </div>
//         <div class="item_des">
//           <div class="item_title">
//             <h5>Fall Limited Edition Sneakers</h5>
//           </div>
//           <div class="item_quantity">
//             <span>$125.00 x ${getNumberOfQuant} <span class="" bold_price>$${totalPrice}.00</span></span>
//           </div>
//         </div>
//         <div class="item_delete">
//           <i id="del_item" class="fa-solid fa-trash"></i>
//         </div>
//         </div>
//         <div class="cart_btn">
//             <button>Checkout</button>
//         </div>
//     `
//     cartItems.innerHTML = ''
//     cartItems.innerHTML += cartHtml
// })
