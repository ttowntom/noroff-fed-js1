import * as api from "./api/index.js";

let products = await api.getAllProducts();
console.log(products);

let jacket = await api.getProduct("6e5ae9e6-2033-4c63-82b9-5b58226425f4");
console.log(jacket);
