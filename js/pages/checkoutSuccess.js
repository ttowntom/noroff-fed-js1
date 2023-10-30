import * as ui from "/js/ui/index.js";

export function checkoutSuccess() {
	const cart = JSON.parse(sessionStorage.getItem("cartItems"));
	const selectedShipping = JSON.parse(
		sessionStorage.getItem("selectedShipping")
	);

	// Render product cards

	// Render total
	ui.renderTotal(cart, selectedShipping);
}
