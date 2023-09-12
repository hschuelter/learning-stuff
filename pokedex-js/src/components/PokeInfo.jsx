import React from 'react';
import {forwardRef, useImperativeHandle, useRef} from 'react';

import Type from './Type';

import DetailedInfo from './DetailedInfo';

const PokeInfo = forwardRef(({ number, name, types}, ref) => {
    let img_src = './img/' + number + '.png';
    let pokemonSpecies = name.charAt(0).toUpperCase() + name.slice(1);

    const [showResults, setShowResults] = React.useState(true);

    
    useImperativeHandle(ref, () => ({
        hideIt() {
            setShowResults(false);
        },
        showIt() {
            setShowResults(true);
        },
    }));

    const onClick = () => {
        setShowResults(false);
        console.log(pokemonSpecies + ' #' + number);
        console.log(ref);
    };


	return (
        <div>
            { !showResults ? null :
                <div className="pokemon-info">
                    <div className="close" onClick={onClick} />
                    <div className="pokemon-sprite"> <img src={img_src}/> </div>
                    <div className="pokemon-name"> {pokemonSpecies} #{number} </div>
                    <div className="pokemon-types">
                        { types.map((item) => 
                            <Type type = {item}/>
                        )}
                        
                    </div> 
                </div>
            }
        </div>
	);
});

export default PokeInfo;