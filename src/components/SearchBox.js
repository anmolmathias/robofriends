import React from 'react';
import './SearchBox.css'

const SearchBox = ({searchChange}) => {
	return(
		<div className="pa2">
			<input className="pa3 search ba b--none br-pill" type="search" placeholder="search robots" name="" id="" onChange={searchChange}/>
		</div>
		);
}

export default SearchBox;