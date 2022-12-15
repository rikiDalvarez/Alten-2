import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PodcasterCard({ name, image, description }) {
	return (
		<Card style={{ maxWidth: '18rem' }}>
			<Card.Img variant="top" src={image} />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>
					{description}
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
}

export default PodcasterCard;