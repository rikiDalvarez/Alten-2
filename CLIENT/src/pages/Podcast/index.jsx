import React from 'react'
import PodcasterCard from "../../components/PodcasterCard"
import PodcastList from '../../components/PodcastList'

function Podcast() {
	return (
		<div>Podcast
			<PodcasterCard></PodcasterCard>
			<h1>Episodes: 1</h1>
			<PodcastList></PodcastList>
		</div>
	)
}

export default Podcast