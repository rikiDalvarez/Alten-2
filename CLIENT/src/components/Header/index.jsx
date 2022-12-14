import Spinner from 'react-bootstrap/Spinner';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function GrowExample() {
	return <Spinner animation="grow" />;
}

function Header({ loading }) {
	return (
		<Navbar expand="lg" variant="light" bg="light">
			<Container>
				<Navbar.Brand href="#">PODCASTER</Navbar.Brand>
			</Container>
			{loading ? <GrowExample></GrowExample> : ""}
		</Navbar>
	);
}

export default Header;


