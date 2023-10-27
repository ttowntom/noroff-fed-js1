export function checkoutProductCard(cart) {
	// Get element from page
	const cartListElement = document.querySelector(`.shopping--cart-itemsList`);

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
		infoTopTitle.innerText = cart[i].title
			.replace("Rainy Days ", "")
			.replace(" Jacket", "");

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
		cardInfoContainer.appendChild(infoTop);

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
		sizeSelectLabel.setAttribute("for", "size-" + cart[i].id);
		sizeSelectLabel.classList.add("visually-hidden");
		sizeSelectLabel.innerText = "Size";
		// Append label to container
		sizeSelectContainer.appendChild(sizeSelectLabel);

		// Create sizeSelect
		const sizeSelect = document.createElement("select");
		sizeSelect.id = "size-" + cart[i].id;
		sizeSelect.name = "size-" + cart[i].id;

		// Create size options
		cart[i].sizes.forEach((size) => {
			// Create option
			const sizeOption = document.createElement("option");
			sizeOption.value = size;
			sizeOption.innerText = size;

			if (cart[i].selectedSize === size) {
				sizeOption.selected = true;
			}

			sizeSelect.appendChild(sizeOption);
		});

		// Append size select to container
		sizeSelectContainer.appendChild(sizeSelect);
		sizeDropdown.appendChild(sizeSelectContainer);
		dropdowns.appendChild(sizeDropdown);

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
		quantitySelectLabel.setAttribute("for", "quantity-" + cart[i].id);
		quantitySelectLabel.classList.add("visually-hidden");
		quantitySelectLabel.innerText = "Quantity";
		// Append label to container
		quantitySelectContainer.appendChild(quantitySelectLabel);

		// Create quantitySelect
		const quantitySelect = document.createElement("select");
		quantitySelect.id = "quantity-" + cart[i].id;
		quantitySelect.name = "quantity-" + cart[i].id;

		// Create quantity options
		const quantity = cart[i].quantity;
		for (let i = 1; i <= 5; i++) {
			// Create option
			const quantityOption = document.createElement("option");
			quantityOption.value = i;
			quantityOption.innerText = i;

			if (quantity === i) {
				quantityOption.selected = true;
			}

			quantitySelect.appendChild(quantityOption);
		}

		// Append quantity select to container
		quantitySelectContainer.appendChild(quantitySelect);
		quantityDropdown.appendChild(quantitySelectContainer);
		dropdowns.appendChild(quantityDropdown);
		cardInfoContainer.appendChild(dropdowns);

		// Create card bottom container
		const cardBottomContainer = document.createElement("div");
		cardBottomContainer.classList.add("grid", "checkout--card-bottom");

		// Create card bottom elements
		// Create price
		const priceElement = document.createElement("div");
		const price = document.createElement("strong");
		price.ariaDescription = "Price";
		price.innerText = "$" + cart[i].discountedPrice * quantity;
		priceElement.appendChild(price);

		// Append price
		cardBottomContainer.appendChild(priceElement);

		//Create remove
		const removeElement = document.createElement("div");
		const removeIcon = document.createElement("i");
		removeIcon.classList.add("fa-solid", "fa-trash-can", "float--right");
		removeIcon.ariaDescription = "Remove from cart";
		removeElement.appendChild(removeIcon);

		// Append remove
		cardBottomContainer.appendChild(removeElement);

		// Append
		cardInfoContainer.appendChild(cardBottomContainer);
		cardContainer.appendChild(cardInfoContainer);
		const secondChild = cartListElement.children[1];
		cartListElement.insertBefore(cardContainer, secondChild);
	}
}
