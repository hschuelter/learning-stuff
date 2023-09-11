// npm run dev
import { useState } from 'react'
import './App.css'
import './css/style.css'

import pokedexData from '../data/poke.json';

import Pokedex from './components/Pokedex';
import Download from './components/Download'

function App() {
	const [count, setCount] = useState(0);


	return (
	<>
		<h1><code>pokedex-js</code></h1>

		<Pokedex 
			data = {pokedexData}
			/>
	</>
	)
}

export default App
