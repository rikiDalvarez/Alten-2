import React from 'react'
import Header from "../../components/Header"
import PodcasterCard from '../../components/PodcasterCard'
import PodcastList from '../../components/PodcastList'
import Search from '../../components/Search'

function Home() {
	return (
		<>
			<Header></Header>
			<Search></Search>
			<PodcasterCard></PodcasterCard>
			<PodcastList></PodcastList>
		</>
	)
}

export default Home