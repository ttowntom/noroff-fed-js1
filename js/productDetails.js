import * as window from "/js/window/index.js";
import * as ui from "/js/ui/index.js";

// Get query string
const params = window.getQueryString();
let category = params.get("gender");
let productId = params.get("id");

// Fetch product data
const apiUrl = `https://api.noroff.dev/api/v1/rainy-days/${productId}`;

let product;
async function getProduct() {
	try {
		const response = await fetch(apiUrl);
		const result = await response.json();
		product = result;

		// Render breadcrumbs
		const breadcrumbs = document.querySelector("#breadcrumbs--nav");
		breadcrumbs.innerHTML = ui.renderBreadcrumbs(category, product);
		// Render gallery
		// -- Create thumbnails
		const thumbnails = document.querySelector(`.thumbnails`);
		const thumbnailsImages = ui.thumbnail(product.image, product.title);
		thumbnails.insertBefore(thumbnailsImages, thumbnails.firstChild);
		// -- Gallery function
		ui.gallery();

		// Render Hero section
		ui.renderDetailsHeroSection(product);

		// Handle sizes click
		ui.handleSizeClick();

		// Render description
		ui.renderDetailDescription(product);

		// Change page title
		window.changePageTitle(
			`${product.title
				.replace("Rainy Days ", "")
				.replace(" Jacket", "")} | Rainy Days`
		);
	} catch (error) {
		ui.productDetailsError();
	}
}

getProduct();
