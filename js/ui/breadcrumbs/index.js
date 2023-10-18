// Render breadcrumbs
export function renderBreadcrumbs(category, product) {
	const breadcrumbs = document.createElement("div");
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
	aCategory.innerText =
		category === "female" ? `Women's jackets` : `Men's jackets`;
	bcCategory.appendChild(aCategory);
	// Create product li
	const bcProduct = document.createElement("li");
	bcProduct.classList.add("current");
	bcProduct.innerText = product.title
		.replace("Rainy Days ", "")
		.replace(" Jacket", "");

	// Append lis to menu
	breadcrumbs.appendChild(bcHome);
	breadcrumbs.appendChild(bcCategory);
	breadcrumbs.appendChild(bcProduct);

	return breadcrumbs.innerHTML;
}
