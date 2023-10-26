export function handleAddToCart(product) {
	const parent = document.querySelector(".hero--content");
	const link = parent.querySelector("a");

	link.addEventListener("click", function () {
		// Get the existing cart items from local storage
		let cartItems = localStorage.getItem("cartItems");

		// If no items in cart, initialize an empty array
		if (!cartItems) {
			cartItems = [];
		} else {
			cartItems = JSON.parse(cartItems);
		}

		// Add the new product to the cart
		cartItems.push(product);

		// Store the updated cart items back in local storage
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	});
}
