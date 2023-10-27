import * as ui from "./ui/index.js";
import * as pages from "./pages/index.js";

// Shopping cart
ui.setCartCount();
let cart = ui.getCart();

// Render mobile navigation
ui.mobileNav();

// Page spesific functions
if (location.pathname === "/") {
	pages.home();
}

if (location.pathname === "/html/products/") {
	pages.products();
}

if (location.pathname === "/html/products/productDetails/") {
	pages.productDetails();
}

if (location.pathname === "/html/checkout/") {
	pages.checkout(cart);
}
