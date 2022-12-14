import React from 'react'

function Search({ value, changeValue }) {
	return (
		<>
			<input value={value}
				onChange={(e) => changeValue(e.target.value)}
				type="text"
				className="px-4 py-2 w-80"
				placeholder="Search...">
			</input>
			<div>Search</div>
		</>

	)
}

export default Search