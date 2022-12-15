const BASE_URL = 'https://itunes.apple.com/';

export default {
	getTopPodcasts: () => {
		return fetchRequest("us/rss/toppodcasts/limit=100/genre=1310/json");
	},
	getPodcast: (id) => {
		return fetchRequest(id);
	}
};

const fetchRequest = (str) => {
	return fetch(`${BASE_URL}${str}`)
		.then((res) => (res.status <= 400 ? res : Promise.reject(res)))
		.then((res) => res.json())
		.catch((err) => {
			console.log(`${err.message} while fetching `);
		});
};
