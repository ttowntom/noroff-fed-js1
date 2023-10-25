// Get query string
export function getQueryString() {
	const queryString = document.location.search;
	const params = new URLSearchParams(queryString);
	return params;
}
