
// script.js
const app = {

    add_cart: function(event) {
        // Fetch product details from the current HTML page
        const clickedElement = event.currentTarget;
        const element = clickedElement.closest(".pro");
        const name = element.querySelector('h5').innerText;
        const price = element.querySelector('h4').innerText;
        const imageSrc = element.querySelector('img').src;

        // Call a function to add details to the cart (located in another HTML page)
        app.addToCart(name, price, imageSrc);
    },
  
    addToCart: function(name, price, imageSrc) {
    const product = {
        name: name,
        price: price,
        imageSrc: imageSrc
    };

    // Retrieve the existing cart items from localStorage
    var cartArr = JSON.parse(localStorage.getItem("cart")) || [];


    // Add the new product to the cart
    cartArr.push(product);

    // Save the updated cartItems back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Navigate to the cart.html page
    window.location.href = 'cart.html';
}
};







