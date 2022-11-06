import React from 'react';
import './Card.css';

const Card = (props) => {
	return(
			<div className="bg-lightest-purple dib br3 pa3 ma2 grow">
				<img class="card-image bb bw1" src={`https://robohash.org/${props.name}?200x200`} alt="robots"/>
				<div class="title-leader">
					<h2>{props.name}</h2>
					<p>{props.email}</p>
				</div>
			</div>
		);
}

export default Card;