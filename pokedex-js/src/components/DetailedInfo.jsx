import React from 'react';
import Type from './Type';

function DetailedInfo ({ number, name, types}) {
    let img_src = './img/' + number + '.png';
    let pokemonSpecies = name.charAt(0).toUpperCase() + name.slice(1);
	return (
        <div className="detailed-info">
            <div className="pokemon-info" onClick={(e) => console.log(pokemonSpecies)}>
                <div className="pokemon-sprite"> <img src={img_src}/> </div>
                <div className="pokemon-name"> {pokemonSpecies} #{number} </div> 
                <div className="pokemon-types">
                    { types.map((item) => 
                        <Type type = {item}/>
                    )}
                    
                </div>
            </div>
        </div>
	);
}

export default DetailedInfo;