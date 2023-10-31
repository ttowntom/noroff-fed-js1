export function createProductCard(products, category, product) {
	const card = document.createElement("article");

	const cardContent = document.createElement("a");
	cardContent.classList.add("product--card", "flex", "flex--column");
	cardContent.href = `/html/products/productDetails/?gender=${category}&id=${products[product].id}`;

	const cardImg = document.createElement("img");
	cardImg.src = products[product].image;
	cardImg.alt = products[product].title;

	const cardText = document.createElement("div");
	cardText.classList.add("center", "flex", "flex--column");
	const cardTitle = document.createElement("h3");
	cardTitle.innerText = products[product].title
		.replace("Rainy Days ", "")
		.replace(" Jacket", "");
	const cardSlug = document.createElement("p");
	cardSlug.innerText = `Color: ${products[product].baseColor}`;
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
	return card;
}
