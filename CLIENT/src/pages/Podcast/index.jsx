import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Header from '../../components/Header'
import PodcasterCard from "../../components/PodcasterCard"
import PodcastList from '../../components/PodcastList'
import { useLocation } from 'react-router-dom'

function Podcast() {
	const podcastInfo = useLocation();
	console.log(podcastInfo)
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