import React, { useEffect, useState } from 'react';
import Header from "../../components/Header"
import Search from '../../components/Search'
import ApiClient from "../../Services/ApiClient.js"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

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
				const lastTime = new Date(JSON.parse(internalStorage.lastTimeCalled));
				const currentTime = Date.now();
				const moreThanDay = Math.abs(currentTime - lastTime) > (1000 * 60 * 60 * 24);
				if (moreThanDay) {
					const response = await ApiClient.getTopPodcasts();
					setTopPodcasts(response.feed.entry);
					localStorage.setItem("podcasts", JSON.stringify({ lastTimeCalled: Date.now().toString(), conteudo: response.feed.entry }))
				} else {
					setTopPodcasts(internalStorage.conteudo)
				}
			} else {
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
			</Row>
			<Row style={{ display: "flex", justifyContent: "flex-end" }}>
				<Col style={{ textAlign: "right", padding: "10px" }}>
					{topPodcasts.length} <Search value={filter} changeValue={setFilter}></Search>
				</Col>
			</Row>
			<Container>
				<Row style={{ marginTop: "50px", display: "flex" }}>
					{topPodcasts
						?.filter((podcast) => {
							if (podcast["im:name"].label.toLowerCase().includes(filter.toLowerCase()) || podcast["im:artist"].label.toLowerCase().includes(filter.toLowerCase())) return true;
						})
						.map((podcast, index) => (
							<Col sm={3} key={podcast.id.attributes["im:id"]}>
								<Link to={`/podcast/${podcast.id.attributes["im:id"]}`} state={{ podcast, time: Date.now() }}>
									<Card key={index} style={{ marginTop: "10px" }}>
										<Card.Img variant="top" src={podcast["im:image"][2].label} />
										<Card.Body style={{ minHeight: "112px" }}>
											<Card.Title>{podcast["im:name"].label}</Card.Title>
											<Card.Text>
												Author: {podcast["im:artist"].label}
											</Card.Text>
										</Card.Body>
									</Card>
								</Link>
							</Col>
						))}
				</Row>
			</Container>
		</Container>
	)
}

export default Home