import React from 'react';
import { saveAs } from 'file-saver';

var url = 'https://pokeapi.co/api/v2/pokemon/'
var fileName = 'poke.json'



	
async function fetchData(url) {
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			return data;
		});
}

async function filterData(jsonData) {
	let data = {
		name: jsonData.name,
		types: [],
		height: jsonData.height,
		weight: jsonData.weight                
	};

	for(let i = 0; i < jsonData.types.length; i++) {
		data.types.push(jsonData.types[i].type.name);
	}

	return data
}


async function saveData(data) {
	let content = JSON.stringify(data, null, 2);
	const file = new Blob([content], { type: 'text/plain;charset=utf-8' });
	saveAs(file, fileName);
}

const Download = () => {


	const handleDownload = async () => {
		let data = {};
		for (let i = 1; i <= 3; i++){
			let rawData = await fetchData(url + '1');
			let f = await filterData(rawData);
			// data[i] = filterData(rawData);
		}
		// console.log(data);
		// saveData(data);
	};

	return (
		<button onClick={handleDownload}>
			Download
		</button>
	);
};

export default Download;