// Get query string
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
let category = params.get("gender");
let productId = params.get("id");

// Render breadcrumbs
function renderBreadcrumbs() {
	const breadcrumbs = document.querySelector("#breadcrumbs--nav");
	// Create home li
	const bcHome = document.createElement("li");
	const aHome = document.createElement("a");
	aHome.href = "/";
	aHome.innerText = "Home";
	bcHome.appendChild(aHome);
	// Create category li
	const bcCategory = document.createElement("li");
	const aCategory = document.createElement("a");
	aCategory.href = `/html/products/?gender=${category}`;
	if (category === "female") {
		aCategory.innerText = `Women's jackets`;
	} else {
		aCategory.innerText = `Men's jackets`;
	}
	bcCategory.appendChild(aCategory);
	// Create current product li
	const bcProduct = document.createElement("li");
	bcProduct.classList.add("current");
	bcProduct.innerText = product.title
		.replace("Rainy Days ", "")
		.replace(" Jacket", "");

	// Append lis to menu
	breadcrumbs.innerHTML = "";
	breadcrumbs.appendChild(bcHome);
	breadcrumbs.appendChild(bcCategory);
	breadcrumbs.appendChild(bcProduct);
}

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

		renderBreadcrumbs();
		renderHeroSection();
		renderDescription();
		changePageTitle();
	} catch (error) {
		console.log(error);
	}
}

getProduct();
