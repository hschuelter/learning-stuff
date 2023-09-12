// npm run dev
import { useState } from 'react'
import './App.css'
import './css/style.css'

import pokedexData from '../data/poke.json';

import Pokedex from './components/Pokedex';
import Download from './components/Download';
import { AppBar, Card, Paper, Input } from '@mui/material';

function App() {
	const [count, setCount] = useState(0);


	return (
	<>
		<header>
			<code>pokedex-js</code>
		</header>

		<Pokedex 
			data = {pokedexData}
			/>
	</>
	)
}

export default App
