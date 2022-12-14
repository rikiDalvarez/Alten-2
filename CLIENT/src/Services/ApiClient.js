const BASE_URL = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

export default {
	getTopPodcasts: () => {
		return fetchRequest();
	}
};

const fetchRequest = () => {
	return fetch(`${BASE_URL}`)
		.then((res) => (res.status <= 400 ? res : Promise.reject(res)))
		.then((res) => res.json())
		.catch((err) => {
			console.log(`${err.message} while fetching `);
		});
};
