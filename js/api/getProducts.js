const apiUrl = "https://api.noroff.dev/api/v1/rainy-days/";

// Get all products
export async function getAllProducts() {
	try {
		const response = await fetch(apiUrl);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

// Get a spesific product
export async function getProduct(id) {
	try {
		const response = await fetch(apiUrl + id);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}
