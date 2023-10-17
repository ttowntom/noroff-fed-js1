// Fetch product data
const url = "https://api.noroff.dev/api/v1/rainy-days";

let products = [];
async function getProducts() {
	try {
		const response = await fetch(url);
		const result = await response.json();
		products = result;

		// Render product cards
		const productsContainer = document.querySelector(`#products`);
		productsContainer.innerHTML = `<h2 class="visually-hidden">Women's jackets</h2>`;

		for (let i = 0; i < products.length; i++) {
			function createHtml() {
				const card = document.createElement("article");
				// // card.classList.add(""); // Add grid-col-span-2 for featured

				const cardContent = document.createElement("a");
				cardContent.classList.add("product--card", "flex", "flex--column");

				cardContent.href = `/html/products/womens/${products[i].id}`; //Change this

				const cardImg = document.createElement("img");
				cardImg.src = products[i].image;
				cardImg.alt = products[i].title;

				const cardText = document.createElement("div");
				cardText.classList.add("center", "flex", "flex--column");
				const cardTitle = document.createElement("h3");
				cardTitle.innerText = products[i].title;
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

			createHtml();
		}
	} catch (error) {
		console.log(error);
	}
}

getProducts();
