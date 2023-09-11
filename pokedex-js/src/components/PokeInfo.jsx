import React from 'react';
import Type from './Type';

function PokeInfo ({ number, name, types}) {
    let img_src = './img/' + number + '.png';
    let pokeKey = 'pokeKey' + number;
	return (
        <div>
            <div className="pokemon-info">
                <div className="sprite"> <img src={img_src}/> </div>
                <div className="pokemon-name"> {name} </div> 
                <div className="pokemon-types">
                    { types.map((item) => 
                        <Type type = {item}/>
                    )}
                    
                </div>
            </div>
        </div>
	);
}

export default PokeInfo;