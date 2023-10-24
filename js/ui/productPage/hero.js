// Render hero section
export function renderDetailsHeroSection(product) {
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
