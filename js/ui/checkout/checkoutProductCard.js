export function checkoutProductCard(cart) {
	console.log(cart);

	// Get element from page
	const cartListElement = document.querySelector(`.shopping--cart-itemsList`);

	// Create title
	const cartListTitle = document.createElement("h2");
	cartListTitle.innerText = "Shopping cart";
	// Render title
	cartListElement.appendChild(cartListTitle);

	// Create cards
	for (let i = 0; i < cart.length; i++) {
		// Create card container
		const cardContainer = document.createElement("div");
		cardContainer.classList.add("checkout--card", "grid");

		// Create product image
		const cardImage = document.createElement("img");
		cardImage.src = cart[i].image;
		cardImage.alt = cart[i].title;
		// Append image
		cardContainer.appendChild(cardImage);

		// Create card info
		const cardInfoContainer = document.createElement("div");
		cardInfoContainer.classList.add(
			"bg--accent-light",
			"clr--black",
			"grid",
			"checkout--card-info"
		);

		// Create top section of info
		const infoTop = document.createElement("div");
		infoTop.classList.add("checkout--card-top");

		// Create top section elements
		const infoTopTitle = document.createElement("h3");
		infoTopTitle.innerText = cart[i].title;

		const infoTopGender = document.createElement("p");
		if (cart[i].gender === "Female") {
			infoTopGender.innerText = "Women's";
		} else {
			infoTopGender.innerText = "Men's";
		}

		// Append top section elements
		infoTop.appendChild(infoTopTitle);
		infoTop.appendChild(infoTopGender);

		// Append top info section to card
		cardContainer.appendChild(infoTop);

		// Create dropdowns
		const dropdowns = document.createElement("div");
		dropdowns.classList.add("checkout--card-select", "grid");

		// Create dropdown for size
		const sizeDropdown = document.createElement("div");

		// Create sizeDropdown elements
		// Create title
		const sizeTitle = document.createElement("p");
		sizeTitle.innerText = "Size";
		// Append title
		sizeDropdown.appendChild(sizeTitle);

		//Create sizeSelect container
		const sizeSelectContainer = document.createElement("div");
		sizeSelectContainer.classList.add("select");

		// Create sizeSelect label
		const sizeSelectLabel = document.createElement("label");
		sizeSelectLabel.for = "size";
		sizeSelectLabel.classList.add("visually-hidden");
		sizeSelectLabel.innerText = "Size";
		// Append label to container
		sizeSelectContainer.appendChild(sizeSelectLabel);

		// Create sizeSelect
		const sizeSelect = document.createElement("select");
		sizeSelect.id = "size";
		sizeSelect.name = "size";

		// Create size options
		cart[i].sizes.forEach((size) => {
			// Create option
			const sizeOption = document.createElement("option");
			sizeOption.value = size;
			sizeOption.innerText = size;
			sizeSelect.appendChild(sizeOption);
		});

		// Append size select to container
		sizeSelectContainer.appendChild(sizeSelect);
		sizeDropdown.appendChild(sizeSelectContainer);
		dropdowns.appendChild(sizeDropdown);
		console.log(sizeDropdown);

		// Create dropdown for quantity
		const quantityDropdown = document.createElement("div");
		quantityDropdown.classList.add("grid", "grid--right");

		// Create quantityDropdown elements
		// Create title
		const quantityTitle = document.createElement("p");
		quantityTitle.innerText = "Quantity";
		// Append title
		quantityDropdown.appendChild(quantityTitle);

		//Create quantitySelect container
		const quantitySelectContainer = document.createElement("div");
		quantitySelectContainer.classList.add("select");

		// Create quantitySelect label
		const quantitySelectLabel = document.createElement("label");
		quantitySelectLabel.for = "quantity";
		quantitySelectLabel.classList.add("visually-hidden");
		quantitySelectLabel.innerText = "Quantity";
		// Append label to container
		quantitySelectContainer.appendChild(quantitySelectLabel);

		// Create quantitySelect
		const quantitySelect = document.createElement("select");
		quantitySelect.id = "quantity";
		quantitySelect.name = "quantity";

		// Create quantity options
		// FIX THIS
		cart[i].quantitys.forEach((quantity) => {
			// Create option
			const quantityOption = document.createElement("option");
			quantityOption.value = quantity;
			quantityOption.innerText = quantity;
			quantitySelect.appendChild(quantityOption);
		});

		// Append quantity select to container
		quantitySelectContainer.appendChild(quantitySelect);
		quantityDropdown.appendChild(quantitySelectContainer);
		dropdowns.appendChild(quantityDropdown);
		console.log(quantityDropdown);
	}
}
