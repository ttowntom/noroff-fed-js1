import * as ui from "./ui/index.js";
import * as pages from "./pages/index.js";

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
