import React from 'react';

function stringify (num) {
	return '+' + num.toString();
}

function Proficiency(props){
	return(
		<div class="skill-row">
			<div class="skill-icon">
			</div>
			<div class="skill-name"> {props.name} </div>
			<div class="skill-bonus right"> {stringify(props.bonus)} </div>
		</div>
	)
}

export default Proficiency;