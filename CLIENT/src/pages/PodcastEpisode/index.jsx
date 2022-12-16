import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Header from '../../components/Header'
import PodcasterCard from '../../components/PodcasterCard'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import { useLocation } from 'react-router-dom';
import Col from 'react-bootstrap/esm/Col';

function PodcastEpisode() {
	const location = useLocation();
	return (
		<Container>
			<Row>
				<Col>
					<Header></Header>
				</Col>
			</Row>
			<Row style={{ padding: "10px", marginTop: "20px" }}>
				<Col sm={4}>
					<PodcasterCard description={location.state.props.description} name={location.state.props.name} image={location.state.props.image}></PodcasterCard>
				</Col>
				<Col sm={8}>
					<Card style={{ minWidth: "200px" }}>
						<Card.Body>
							<Card.Title>{location.state.props.name} </Card.Title>
							<Card.Subtitle className="mb-2 text-muted">{location.state.props.title}</Card.Subtitle>
							<Card.Text>
								{location.state.props.description}
							</Card.Text>
							<audio controls>
								<source src="horse.ogg" type="audio/ogg" />
								<source src="horse.mp3" type="audio/mpeg" />
								Your browser does not support the audio element.
							</audio>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>

	)
}

export default PodcastEpisode