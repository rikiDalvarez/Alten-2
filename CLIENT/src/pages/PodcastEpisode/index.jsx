import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Header from '../../components/Header'
import PodcasterCard from '../../components/PodcasterCard'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import { useLocation } from 'react-router-dom';
import Col from 'react-bootstrap/esm/Col';
import PodcastList from '../../components/PodcastList';



function PodcastEpisode() {
	const location = useLocation();
	console.log({ location })
	return (
		<Container>
			<Row>
				<Col>
					<Header></Header>
				</Col>
			</Row>
			<Row>
				<Col sm={4}>
					<PodcasterCard description={location.state.props.description} name={location.state.props.name} image={location.state.props.image}></PodcasterCard>
				</Col>
				<Col sm={8}>
					<PodcastList
						description={location.state.props.description} name={location.state.props.collectionName} image={location.state.props.artworkUrl600}
						id={location.state.props.artistId} title={location.state.props.collectionName} count={location.state.props.trackCount} duration={2} date={3}></PodcastList>
				</Col>
			</Row>
		</Container>

	)
}

export default PodcastEpisode