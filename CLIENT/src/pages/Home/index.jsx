import React, { useEffect, useState } from 'react';
import Header from "../../components/Header"
import PodcasterCard from '../../components/PodcasterCard'
import PodcastList from '../../components/PodcastList'
import Search from '../../components/Search'
import ApiClient from "../../Services/ApiClient.js"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Home() {
	const [topPodcasts, setTopPodcasts] = useState([])
	const [loading, setLoading] = useState();
	const [filter, setFilter] = useState('');

	useEffect(() => {
		getPodcasts();
		setLoading(false)
	}, []);

	async function getPodcasts() {
		setLoading(true);
		const response = await ApiClient.getTopPodcasts();
		setTopPodcasts(response.feed.entry)
	}

	return (
		<Container>
			<Row>
				<Col sm={12}>
					<Header loading={loading}></Header>
				</Col>
				<Col sm={{ span: 12, offset: 9 }}>
					{topPodcasts.length} <Search value={filter} changeValue={setFilter}></Search>
				</Col>
			</Row>
			<Row>
				{topPodcasts.map((podcast, index) => (
					<Card sm={3} key={index} style={{ width: '18rem' }}>
						<Card.Img variant="top" src={podcast["im:image"][0].label} />
						<Card.Body>
							<Card.Title>{podcast["im:name"].label}</Card.Title>
							<Card.Text>
								Author: {podcast["im:artist"].label}
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				))}
			</Row>
		</Container>
	)
}

export default Home