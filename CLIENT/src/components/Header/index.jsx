import Spinner from 'react-bootstrap/Spinner';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function GrowExample() {
	return <Spinner animation="grow" />;
}

function Header({ loading }) {
	return (
		<Navbar expand="lg" variant="light" bg="light">
			<Container>
				<Link to="/">
					<Navbar.Brand>PODCASTER</Navbar.Brand>
				</Link>
			</Container>
			{loading ? <GrowExample></GrowExample> : ""}
		</Navbar>
	);
}

export default Header;


