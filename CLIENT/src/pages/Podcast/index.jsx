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
	const location = useLocation();
	console.log("pocast loc: " + { location })


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
				console.log(podcast)
				localStorage.setItem(podcastId, JSON.stringify({ lastTimeCalled: Date.now().toString(), conteudo: response[0] }))
			}
		} catch (error) {
			console.log(error)
		}
		setLoading(false);
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
			<Row style={{ padding: "10px", marginTop: "20px" }}>
				<Col sm={4}>
					<PodcasterCard description={location.state.description} name={podcast?.artistName} image={podcast?.artworkUrl600}></PodcasterCard>
				</Col>
				<Col sm={8}>
					<PodcastList
						description={location.state.description} name={podcast?.artistName} image={podcast?.artworkUrl600}
						id={podcastId} title={podcast?.collectionName} count={podcast?.trackCount} duration={2} date={3}></PodcastList>
				</Col>
			</Row>
		</Container>
	)
}

export default Podcast