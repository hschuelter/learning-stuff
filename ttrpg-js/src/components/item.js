import React from 'react';


function Item(props) {
	return(
        <div class="item border light-blue" style={{flex: props.flex}}>
			<div class="small-value center-vertical"> {props.value} </div>
			<div class="description"> {props.description} </div>
        </div>
	)
}

export default Item;