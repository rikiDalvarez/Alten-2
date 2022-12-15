import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Header from '../../components/Header'
import PodcasterCard from "../../components/PodcasterCard"
import PodcastList from '../../components/PodcastList'
import { useLocation, useParams } from 'react-router-dom'
import ApiClient from '../../Services/ApiClient'

function Podcast() {
	const [podcast, setPodcast] = useState();

	const { podcastId } = useParams();

	// useEffect(() => {
	// }, [])

	const getPodcastInfo = (podcastId) => {
		const podcastLocal = localStorage.getItem(podcastId)
		return podcastLocal
	}

	const getPodcast = async (podcastId) => {
		const response = await ApiClient.getPodcast(podcastId);
		console.log({ response })
		setPodcast(response);
	}

	if (localStorage.getItem(podcastId) !== null) {
		getPodcastInfo(podcastId);
	} else {
		getPodcast(podcastId)
	}



	// const podcastInfo = useLocation();
	// const data = podcastInfo.state.podcast;
	// console.log(podcastInfo)
	// localStorage.setItem(podcastInfo.state.podcast.id.attributes["im:id"], data)
	// const podcastFromStorage = localStorage.getItem(podcastInfo.state.podcast.id.attributes["im:id"])
	// console.log({ podcastFromStorage })



	return (
		<Container>
			<Header></Header>
			<PodcasterCard></PodcasterCard>
			<h1>Episodes: 1</h1>
			<PodcastList></PodcastList>
		</Container>
	)
}

export default Podcast