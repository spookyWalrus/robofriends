import React from 'react';

const SearchBox = ({searchThis,searchfield}) =>{
	return(
		<div className="pa2">
				<input 
					className="pa3 ba b--green bg-lightest-blue"
					type="search" 
					placeholder="find a robot" 
					onChange={searchThis}
				/>
		</div>

	);
}

export default SearchBox;