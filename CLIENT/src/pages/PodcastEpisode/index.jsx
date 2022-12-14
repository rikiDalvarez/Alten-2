import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Header from '../../components/Header'
import PodcasterCard from '../../components/PodcasterCard'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';


function PodcastEpisode() {
	return (
		<Container>
			<Header></Header>
			<Row>

				<PodcasterCard></PodcasterCard>
				<Card style={{ width: '18rem' }}>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Card.Link href="#">Card Link</Card.Link>
						<Card.Link href="#">Another Link</Card.Link>
					</Card.Body>
				</Card>
			</Row>

		</Container>

	)
}

export default PodcastEpisode