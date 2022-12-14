import React from 'react'
import PodcasterCard from "../../components/PodcasterCard"

function Podcast() {
	return (
		<div>Podcast
			<PodcasterCard></PodcasterCard>
			<h1>Episodes: 1</h1>
			<div>
				<ul>
					<li>title</li>
					<li>date</li>
					<li>duration</li>
				</ul>
			</div>

		</div>
	)
}

export default Podcast