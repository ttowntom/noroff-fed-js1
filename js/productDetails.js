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
	bcProduct.innerText = product.title.replace("Rainy Days ", "");

	// Append lis to menu
	breadcrumbs.innerHTML = "";
	breadcrumbs.appendChild(bcHome);
	breadcrumbs.appendChild(bcCategory);
	breadcrumbs.appendChild(bcProduct);

	//
	// Render hero section
	//
	const heroContainer = document.querySelector(`.hero--content`);
	// Render hero title
	const heroTitle = document.createElement("h1");
	heroTitle.innerText = "";

	heroContainer.innerHTML = "";
	heroContainer.appendChild(heroTitle);
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
	} catch (error) {
		console.log(error);
	}
}

getProduct();
