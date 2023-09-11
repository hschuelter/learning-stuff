document.body.innerHTML = "<h3> (work in progress) </h3>"

var url = 'https://pokeapi.co/api/v2/pokemon/1/'
var file_name = '../data/25.json'

async function get_json(url) {
    let data = {};

    fetch(url)
        .then((response) => response.json())
        .then((json_data) => filter_data(json_data));

    
    // let my_data = {
    //     name: data.name,
    //     types: [],
    //     height: data.height,
    //     weight: data.weight                
    // };

    // for(let i = 0; i < data.types.length; i++) {
    //     data.types.push(data.types[i].ability.name);
    // }
    return data;
}

function write_file(file_name, data) {
    const fs = require('fs');

    fs.writeFile(file_name, data, (err) => {
        if (err) throw err;
       });
}

function filter_data(old_data) {
    let data = {
        name: old_data.name,
        types: [],
        height: old_data.height,
        weight: old_data.weight                
    };
    
    for(let i = 0; i < old_data.types.length; i++) {
        data.types.push(old_data.types[i].type.name);
    }

    console.log(data)
}


get_json(url)


// -      name  -- OK
// -     types  -- OK
// - abilities  -- 
// -    height  -- OK
// -    weight  -- OK