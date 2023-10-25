export function getCart() {
	let cart = localStorage.getItem("cartItems");
	return cart;
}

// localStorage.setItem("cartItems", []);
