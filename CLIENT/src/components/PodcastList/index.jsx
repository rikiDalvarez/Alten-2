import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function PodcastList(props) {

	let tracks = new Array(props.count).fill(props.title)

	return (<>
		<h2>Episodes: {props.count}</h2>
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>Title</th>
					<th>Date</th>
					<th>Duration</th>
				</tr>
			</thead>
			<tbody>
				{tracks?.map((track, index) => (
					<tr key={index}>
						<td>
							<Link to={`/podcast/${props.id}/episode/${props.id}`}>
								{props.title}
							</Link>
						</td>
						<td>1</td>
						<td>1</td>
					</tr>
				))}
			</tbody>
		</Table>
	</>
	);
}

export default PodcastList;