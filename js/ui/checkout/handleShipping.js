import * as ui from "/js/ui/index.js";

export function handleShipping(cart) {
	const shippingRadio = document.querySelectorAll('input[name="shipping"]');

	shippingRadio.forEach((radioButton) => {
		radioButton.addEventListener("click", () => {
			if (radioButton.checked) {
				ui.renderTotal(cart);
			}
		});
	});
}
