export function handlePay(cart) {
	const payButton = document.querySelector('.right input[type="submit"]');
	const checkedShippingRadio = document.querySelector(
		'input[name="shipping"]:checked'
	);

	let shipping = {
		value: checkedShippingRadio.value,
		cost: 0,
	};
	if (checkedShippingRadio.value === "royal-mail") {
		shipping.cost = 21;
	} else if (checkedShippingRadio.value === "express") {
		shipping.cost = 44;
	}

	payButton.addEventListener("click", () => {
		sessionStorage.setItem("selectedShipping", JSON.stringify(shipping));
		sessionStorage.setItem("cartItems", JSON.stringify(cart));
		localStorage.clear();
	});
}
