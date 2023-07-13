import React from 'react';

function characterInfo(props) {
	console.log(props);
	return(
		<div class="row dark-font">
			<div class="item">
				<div class="photo-placeholder wip"></div>
			</div>
			<div class="item border light-blue" style={{flex: 3}}>
				<div class="character-content">
					<div class="name"> {props.character_name} </div>
					<div class="title"> {props.race + ' ' + props.class.join('/')} </div>
				</div>
			</div>
		</div>
	)
}

export default characterInfo;