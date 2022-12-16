const BASE_URL = 'https://itunes.apple.com/';

export default {
	getTopPodcasts: () => {
		return fetchRequest("us/rss/toppodcasts/limit=100/genre=1310/json");
	},
	getPodcast: (id) => {
		return fetchPodcast(id);
	}
};

const fetchPodcast = async (id) => {
	const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${id}`)}`);
	const responseJ = await response.json();
	const test = (JSON.parse(responseJ.contents).results)

	return test
}


const fetchRequest = (str) => {
	return fetch(`${BASE_URL}${str}`)
		.then((res) => (res.status <= 400 ? res : Promise.reject(res)))
		.then((res) => res.json())
		.catch((err) => {
			console.log(`${err.message} while fetching `);
		});
};
