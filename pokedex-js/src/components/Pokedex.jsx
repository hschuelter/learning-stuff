import React from 'react';

import PokeInfo from './PokeInfo';
import Card from '@mui/material/Card';



function Pokedex ({ data }) {
    var list = [];

    for (let i = 0; i < data.length; i++){
        data[i].number = i + 1;
        list.push(data[i]);
    }

	return (
        <div class="pokedex">
            {list.map((item) => 
                <PokeInfo
                    number = {item.number}
                    name = {item.name}
                    types = {item.types}
                />
            )}
        </div>
	);
}

export default Pokedex;