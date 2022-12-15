import React from 'react'

function Search({ value, changeValue }) {
	return (
		<>
			<input value={value}
				onChange={(e) => {
					changeValue(e.target.value);
				}}
				type="text"
				placeholder="Search...">
			</input>
		</>

	)
}

export default Search