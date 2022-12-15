import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Header from '../../components/Header'
import PodcasterCard from "../../components/PodcasterCard"
import PodcastList from '../../components/PodcastList'
import { useLocation, useParams } from 'react-router-dom'
import ApiClient from '../../Services/ApiClient'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

function Podcast() {
	const [podcast, setPodcast] = useState();
	const [loading, setLoading] = useState()

	const { podcastId } = useParams();

	useEffect(() => {
		getPodcast(podcastId)
	}, [])

	// const getPodcastInfo = (podcastId) => {
	// 	const podcastLocal = localStorage.getItem(podcastId)
	// 	return podcastLocal
	// }	

	const getPodcast = async (podcastId) => {
		setLoading(true);
		try {
			const internalStorage = JSON.parse(localStorage.getItem(podcastId));
			if (internalStorage) {
				const lastTime = new Date(JSON.parse(internalStorage.lastTimeCalled));
				const currentTime = Date.now();
				const moreThanDay = Math.abs(currentTime - lastTime) > (1000 * 60 * 60 * 24);
				if (moreThanDay) {
					const response = await ApiClient.getPodcast(podcastId);
					setPodcast(response[0]);
					localStorage.setItem(podcastId, JSON.stringify({ lastTimeCalled: Date.now().toString(), conteudo: response[0] }))
				} else {
					setPodcast(internalStorage.conteudo)
				}
			} else {
				const response = await ApiClient.getPodcast(podcastId);
				setPodcast(response[0]);
				localStorage.setItem(podcastId, JSON.stringify({ lastTimeCalled: Date.now().toString(), conteudo: response[0] }))
			}
		} catch (error) {
			console.log(error)
		}
		setLoading(false);
		const response = await ApiClient.getPodcast(podcastId);
		console.log(response)
	}

	// if (localStorage.getItem(podcastId) !== null) {
	// 	getPodcastInfo(podcastId);
	// } else {
	// 	getPodcast(podcastId)
	// }

	return (
		<Container>
			<Row>
				<Col>
					<Header></Header>
				</Col>
			</Row>
			<Row>
				<Col sm={4}>
					<PodcasterCard name={podcast.artistName}></PodcasterCard>
				</Col>
				<Col sm={8}>
					<h1>Episodes: 1</h1>
					<PodcastList></PodcastList>
				</Col>
			</Row>
		</Container>
	)
}

export default Podcast