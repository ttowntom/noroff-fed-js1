export function createHomeFeaturedCards(favs, apiUrl) {
	// Create container
	let featured = document.createElement("div");
	featured.classList.add("featured--container", "grid");

	// Create cards
	for (let i = 0; i < favs.length; i++) {
		let product = document.createElement("article");

		let card = document.createElement("a");
		card.classList.add("product--card", "flex", "flex--column");
		card.href = `html/products/productDetails/?id=${favs[i].id}`;
		console.log(card.href);

		let image = document.createElement("img");
		image.src = favs[i].image;
		image.alt = favs[i].title;

		let textSection = document.createElement("div");
		textSection.classList.add("center", "flex", "flex--column");

		let title = document.createElement("h3");
		title.innerText = favs[i].title;

		let color = document.createElement("p");
		color.innerText = favs[i].baseColor;

		let hr = document.createElement("div");
		hr.classList.add("hr");

		let details = document.createElement("p");
		details.innerText = "See details";

		textSection.appendChild(title);
		textSection.appendChild(color);
		textSection.appendChild(hr);
		textSection.appendChild(details);

		card.appendChild(image);
		card.appendChild(textSection);

		product.appendChild(card);

		featured.appendChild(product);
	}
	return featured.innerHTML;
}
