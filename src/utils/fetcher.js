const fetcher = (...args) => fetch(...args).then((res) => res.json());

const fetchWithParams = ({ url, params }) => {
	return fetch(`${url}${params}`).then((res) => res.json());
};

export { fetchWithParams, fetcher };
