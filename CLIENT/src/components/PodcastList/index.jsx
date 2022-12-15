import Table from 'react-bootstrap/Table';

function PodcastList(props) {
	return (<>
		<h2>Episodes: {props.count}</h2>
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>{props.title}</th>
					<th>{props.date}</th>
					<th>{props.duration}</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>2</td>
					<td>1</td>
					<td></td>
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
	</>
	);
}

export default PodcastList;