import React, { useEffect, useState } from 'react';
import Header from "../../components/Header"
import Search from '../../components/Search'
import ApiClient from "../../Services/ApiClient.js"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Home() {
	const [topPodcasts, setTopPodcasts] = useState([])
	const [loading, setLoading] = useState();
	const [filter, setFilter] = useState('');

	useEffect(() => {
		getPodcasts();
	}, []);

	async function getPodcasts() {
		setLoading(true);
		try {
			const internalStorage = JSON.parse(localStorage.getItem("podcasts"));
			if (internalStorage) {
				console.log(internalStorage)
				console.log("internal if")
				const lastTime = new Date(JSON.parse(internalStorage.lastTimeCalled));
				const currentTime = Date.now();
				const moreThanDay = Math.abs(currentTime - lastTime) > (1000 * 60 * 60 * 24);
				console.log(moreThanDay)
				if (moreThanDay) {
					console.log("morethanaday")
					const response = await ApiClient.getTopPodcasts();
					setTopPodcasts(response.feed.entry);
					localStorage.setItem("podcasts", JSON.stringify({ lastTimeCalled: Date.now().toString(), conteudo: response.feed.entry }))
				} else {
					setTopPodcasts(internalStorage.conteudo)
				}
			} else {
				console.log("else")
				const response = await ApiClient.getTopPodcasts();
				setTopPodcasts(response.feed.entry);
				localStorage.setItem("podcasts", JSON.stringify({ lastTimeCalled: Date.now().toString(), conteudo: response.feed.entry }))

			}
		} catch (error) {
			console.log(error)
		}
		setLoading(false);
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
						<Card.Img variant="top" src={podcast["im:image"][2].label} />
						<Card.Body>
							<Card.Title>{podcast["im:name"].label}</Card.Title>
							<Card.Text>
								Author: {podcast["im:artist"].label}
							</Card.Text>
						</Card.Body>
					</Card>
				))}
			</Row>
		</Container>
	)
}

export default Home