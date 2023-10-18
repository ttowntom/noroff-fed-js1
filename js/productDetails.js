import * as window from "/js/window/index.js";
import * as ui from "/js/ui/index.js";

// Get query string
const params = window.getQueryString();
let category = params.get("gender");
let productId = params.get("id");

// Render hero section
function renderHeroSection() {
	const heroContainer = document.querySelector(`.hero--content`);
	// Render hero title
	const heroTitle = document.createElement("h1");
	heroTitle.innerText = product.title
		.replace("Rainy Days ", "")
		.replace(" Jacket", "");
	// Render color
	const heroColor = document.createElement("h2");
	heroColor.innerText = product.baseColor;
	// Render price tag
	const heroPrice = document.createElement("strong");
	heroPrice.classList.add("product--hero-price");
	heroPrice.innerText = `$${product.price}`;
	// Render sizes
	const heroSizes = document.createElement("div");
	heroSizes.classList.add("flex", "flex--left", "size--wrapper");
	heroSizes.ariaLabel = "Sizes";

	for (let i = 0; i < product.sizes.length; i++) {
		const heroSize = document.createElement("div");
		heroSize.classList.add("size", "size--ring", "flex", "center");
		heroSize.ariaDescription = `Size: ${product.sizes[i]}`;
		heroSize.innerText = product.sizes[i];
		heroSizes.appendChild(heroSize);
	}
	// Render button
	const heroButton = document.createElement("a");
	heroButton.classList.add("btn--green");
	heroButton.href = "/html/checkout/";
	heroButton.innerText = "Add to cart";

	// Append to hero section
	heroContainer.innerHTML = "";
	heroContainer.appendChild(heroTitle);
	heroContainer.appendChild(heroColor);
	heroContainer.appendChild(heroPrice);
	heroContainer.appendChild(heroSizes);
	heroContainer.appendChild(heroButton);
}

// Render description
function renderDescription() {
	const descriptionContainer = document.querySelector(
		`.product--description-container`
	);
	//Render header
	const descHeader = document.createElement("h2");
	descHeader.classList.add("product--description-header");
	descHeader.innerText = "The ultimate protection against the elements";
	// Render description
	const descParagraph = document.createElement("p");
	descParagraph.innerText = product.description;
	// Append to description container
	descriptionContainer.innerHTML = "";
	descriptionContainer.appendChild(descHeader);
	descriptionContainer.appendChild(descParagraph);
}

// Change page title
function changePageTitle() {
	document.title = `${product.title
		.replace("Rainy Days ", "")
		.replace(" Jacket", "")} | Rainy Days`;
}

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
		renderHeroSection();
		renderDescription();
		changePageTitle();
	} catch (error) {
		console.log(error);
	}
}

getProduct();
