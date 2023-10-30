import * as ui from "/js/ui/index.js";

export function handlePay(cart) {
	const payButton = document.querySelector('.right input[type="submit"]');
	const checkedShippingRadio = document.querySelector(
		'input[name="shipping"]:checked'
	);

	payButton.addEventListener("click", () => {
		sessionStorage.setItem("cartItems", JSON.stringify(cart));
		ui.storeFormData();
		localStorage.clear();
	});
}
