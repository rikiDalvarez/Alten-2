import Table from 'react-bootstrap/Table';

function PodcastList(props) {
	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>Title</th>
					<th>Date</th>
					<th>Duration</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{props.title}</td>
					<td>{props.date}</td>
					<td>{props.duration}</td>
				</tr>
				<tr>
					<td>1</td>
					<td>Jacob</td>
					<td>Thornton</td>
				</tr>
				<tr>
					<td>3</td>
					<td>@twitter</td>
					<td>@twitter</td>
				</tr>
			</tbody>
		</Table>
	);
}

export default PodcastList;