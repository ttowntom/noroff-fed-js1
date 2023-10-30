import * as ui from "/js/ui/index.js";

export function checkout(cart) {
	ui.checkoutProductCard(cart);
	ui.handleShipping(cart);
	ui.renderTotal(cart);
	ui.handlePay(cart);
}
