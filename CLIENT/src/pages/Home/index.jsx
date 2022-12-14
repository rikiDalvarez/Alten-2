import React, { useEffect, useState } from 'react';
import Header from "../../components/Header"
import PodcasterCard from '../../components/PodcasterCard'
import PodcastList from '../../components/PodcastList'
import Search from '../../components/Search'
import ApiClient from "../../Services/ApiClient.js"

function Home() {
	const [topPodcasts, setTopPodcasts] = useState([])
	const [loading, setLoading] = useState();
	const [filter, setFilter] = useState('');

	useEffect(() => {
		getPodcasts()
	}, []);

	async function getPodcasts() {
		setLoading(true);
		const response = await ApiClient.getTopPodcasts();
		setTopPodcasts(response.feed.entry)
		console.log("home:" + loading)
	}

	return (
		<>
			<Header loading={loading}></Header>
			<Search value={filter} changeValue={setFilter}></Search>
			{console.log(filter)}
			<PodcasterCard></PodcasterCard>
			<PodcastList></PodcastList>
		</>
	)
}

export default Home