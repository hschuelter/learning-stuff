import React from 'react';

function translateStats(stat) {
	return Math.floor((stat - 10)/2);
}

function applyProficiency(props, checked) {
	var bonus = translateStats(props.bonus);
	var name = props.name + '_value';
	var prof = props.prof;
	var value = document.getElementById(name);

	if (checked) bonus += prof
	value.textContent = stringify(bonus);
}

function stringify(num) {

	if(num > 0) num = '+' + num.toString();
	else num = num.toString();

	return num;
}

function Skills(props) {
	var bonus = translateStats(props.bonus);


	return(
		<div class="skill-row">
			<input type="checkbox" style={{paddingRight: 2 + 'px'}} onChange={(check) => applyProficiency(props, check.target.checked)}/>
			<div class="skill-name"> {props.name} </div>
			<div id={props.name + '_value'} class="skill-bonus center"> {stringify(bonus)} </div>
		</div>
	)
}

export default Skills;