// Fetch product data
const url = "https://api.noroff.dev/api/v1/rainy-days";

let products = [];
async function getProducts() {
	try {
		const response = await fetch(url);
		const result = await response.json();
		products = result;
	} catch (error) {
		console.log(error);
	}
}

getProducts();
