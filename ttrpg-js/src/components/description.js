import React from 'react';

function Description(props){
	return(
		<div class="skill-row">
			<div class="skill-icon">
			</div>
			<div class="skill-name"> {props.name} </div>
			<div class="skill-bonus right"> {props.bonus} </div>
		</div>
	)
}

export default Description;