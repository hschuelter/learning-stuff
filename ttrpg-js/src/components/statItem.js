import React from 'react';

function translateStats(stat) {
	return Math.floor((stat - 10)/2);
}

function stringify(num) {

	if(num > 0) num = '+' + num.toString();
	else num = num.toString();

	return num;
}

function statItem(props) {
	var modifier = translateStats(props.stat);
	return(
		<div class="item">
			<div class="value dark-font"> {stringify(modifier)} </div>
			<div class="description"> {props.description} </div>
		</div>
	)
}

export default statItem;