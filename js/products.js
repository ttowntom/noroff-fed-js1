// Get query string
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
let category = params.get("gender");

// Render hero section
// Render hero image
const heroImage = document.querySelector(`.hero--img`);
if (category === "female") {
	heroImage.id = "hero--img-productsWomen";
} else {
	heroImage.id = "hero--img-productsMen";
}

// Render hero buttons
const heroButtons = document.querySelector(`.hero--btn`);
let buttonMen = document.createElement("a");
buttonMen.href = "?gender=male";
buttonMen.innerText = "Men's";
let buttonWomen = document.createElement("a");
buttonWomen.href = "?gender=female";
buttonWomen.innerText = "Women's";

if (category === "female") {
	buttonWomen.classList.add("hero--btn-current");
	buttonMen.classList.remove("hero--btn-current");
} else {
	buttonWomen.classList.remove("hero--btn-current");
	buttonMen.classList.add("hero--btn-current");
}

heroButtons.innerHTML = "";
heroButtons.appendChild(buttonMen);
heroButtons.appendChild(buttonWomen);

// Render hero text
const heroHeader = document.querySelector(`.products--text`);
const heroTitle = document.createElement("h2");
heroTitle.classList.add("center");
const heroSlug = document.createElement("p");

if (category === "female") {
	heroTitle.innerText = "Our women's collection";
	heroSlug.innerText = `Step into the world of outdoor exploration with Rainy Days' remarkable women's collection. Designed to empower and inspire, our range of rain jackets effortlessly blends style and performance. Whether you're conquering trails, embracing the slopes, or simply enjoying nature's beauty,  our jackets offer unrivaled comfort and protection.`;
} else {
	heroTitle.innerText = "Our men's collection";
	heroSlug.innerText = `Unleash your outdoor potential with Rainy Days' exceptional men's collection. Our jackets combine functionality, durability, and style to elevate your outdoor experience. Designed for the modern adventurer, our range offers comfort and protection from the elements.`;
}

heroHeader.innerHTML = "";
heroHeader.appendChild(heroTitle);
heroHeader.appendChild(heroSlug);

// Fetch product data
const apiUrl = "https://api.noroff.dev/api/v1/rainy-days";

let products = [];
async function getProducts() {
	try {
		const response = await fetch(apiUrl);
		const result = await response.json();
		products = result;

		// Render product cards
		const productsContainer = document.querySelector(`#products`);
		productsContainer.innerHTML = `<h2 class="visually-hidden">Women's jackets</h2>`;

		for (let i = 0; i < products.length; i++) {
			function createHtml() {
				const card = document.createElement("article");
				if (products[i].favorite) {
					card.classList.add("grid-col-span-2");
				}

				const cardContent = document.createElement("a");
				cardContent.classList.add("product--card", "flex", "flex--column");

				cardContent.href = `/html/products/productDetails/?id=${products[i].id}`; //Change this

				const cardImg = document.createElement("img");
				cardImg.src = products[i].image;
				cardImg.alt = products[i].title;

				const cardText = document.createElement("div");
				cardText.classList.add("center", "flex", "flex--column");
				const cardTitle = document.createElement("h3");
				cardTitle.innerText = products[i].title.replace("Rainy Days ", "");
				const cardSlug = document.createElement("p");
				cardSlug.innerText = `Color: ${products[i].baseColor}`;
				const cardHr = document.createElement("div");
				cardHr.classList.add("hr");
				const cardCta = document.createElement("p");
				cardCta.innerText = "See details";

				cardText.appendChild(cardTitle);
				cardText.appendChild(cardSlug);
				cardText.appendChild(cardHr);
				cardText.appendChild(cardCta);

				cardContent.appendChild(cardImg);
				cardContent.appendChild(cardText);

				card.appendChild(cardContent);
				productsContainer.appendChild(card);
			}
			if (products[i].gender.toLowerCase() === category) {
				createHtml();
			}
		}
	} catch (error) {
		console.log(error);
	}
}

getProducts();
