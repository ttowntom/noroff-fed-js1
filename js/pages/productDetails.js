import * as api from "/js/api/index.js";
import * as window from "/js/window/index.js";
import * as ui from "/js/ui/index.js";

export function productDetails() {
	// Get query string
	const params = window.getQueryString();
	console.log(params);
	const productId = params.searchParams.get("id");
	console.log(productId);
	const category = params.searchParams.get("gender");
	console.log(category);

	// Fetch product data
	const apiUrl = `https://api.noroff.dev/api/v1/rainy-days/${productId}`;
	console.log(apiUrl);

	let product;
	async function getProduct() {
		try {
			console.log("Fetching product data..");
			product = await api.getProduct(apiUrl);
			console.log("Product data fetched");

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
			ui.handleAddToCart(product);

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
}
