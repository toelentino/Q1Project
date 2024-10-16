const cartList = document.getElementById('cart-list');
const buyNowBtns = document.querySelectorAll('[id^="buy-now-btn-"]');
const checkoutBtn = document.getElementById('checkout-btn');

const products = [
    { id: 1, name: 'Mia\'s Yellow Vintage-styled Dress', price: 21.99 },
    { id: 2, name: 'Sebastian\'s Simple White Polo', price: 14.99 },
    { id: 3, name: 'Planetarium\'s Jazz Shoes for Women', price: 39.99 },
    { id: 4, name: 'Mia\'s Dashing Green Dress', price: 24.99 },
    { id: 5, name: 'Sebastian\'s Brown Vintage Suit', price: 27.99 },
    { id: 6, name: 'Planetarium\'s Jazz Shoes for Men', price: 39.99 },
    { id: 7, name: 'Mia\'s Royal Blue Chiffon Halter Dress', price: 24.99 },
    { id: 8, name: 'Sebastian\'s Dark Blue Suit', price: 27.99 },
    { id: 9, name: 'Planetarium\'s Vintage-styled Ties', price: 11.99 },
    { id: 10, name: 'Sebastian\'s Wisp Glasses', price: 20.99 },
    { id: 11, name: 'Mia\'s Graceful Emerald Pendant', price: 19.99 },
    { id: 12, name: 'Sebastian\'s Warm Brown Sunglasses', price: 20.99 },
    { id: 13, name: 'Planetarium\'s Light Beige Heels', price: 39.99 },
    { id: 14, name: 'Sebastian\'s Moonstone Ring', price: 17.99 },
    { id: 15, name: 'Planetarium\'s Black Fedora Hat', price: 14.99 },
    { id: 16, name: 'Planetarium\'s La La Land Poster', price: 9.99 },
    { id: 17, name: 'Planetarium\'s La La Land Mug', price: 24.99 },
    { id: 18, name: 'Planetarium\'s La La Land Vinyl', price: 34.99 },
];

const cartItems = [];

buyNowBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const productId = parseInt(btn.id.split('-').pop());
        const product = products.find((product) => product.id === productId);
        const existingItem = cartItems.find((item) => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cartItems.push({ product, quantity: 1 });
        }
        updateCartList();
    });
});

checkoutBtn.addEventListener('click', () => {
    const totalPrice = cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    alert(`Total price: $${totalPrice.toFixed(2)}`);
});

function updateCartList() {
    cartList.innerHTML = '';
    cartItems.forEach((item) => {
        const listItem = document.createElement('li');
        const productName = document.createElement('span');
        productName.textContent = item.product.name;
        productName.className = 'product-name';
        const productPrice = document.createElement('span');
        productPrice.textContent = `$${item.product.price.toFixed(2)} x ${item.quantity}`;
        listItem.appendChild(productName);
        listItem.appendChild(document.createTextNode(' - '));
        listItem.appendChild(productPrice);
        cartList.appendChild(listItem);
    });
}
document.getElementById('get-started-btn').addEventListener('click', function() {
  document.getElementById('welcome-message').innerHTML = 'Welcome to Planetarium. You\'ve got started! To check your size, please fill up the contact form.';
});
