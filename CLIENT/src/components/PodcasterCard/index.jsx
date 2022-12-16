import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';


function PodcasterCard({ name, image, description, id }) {
	return (
		<Card style={{ maxWidth: '18rem' }}>

			<Card.Img variant="top" src={image} />

			<Card.Body>
				<Card.Title>By: {name}</Card.Title>
				<Card.Text>
					Description: {description}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default PodcasterCard;