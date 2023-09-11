import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Download from './components/Download'

function App() {
	const [count, setCount] = useState(0);


	return (
	<>
		<h1><code>pokedex-js</code></h1>
		<div className="card">
			{/* <button onClick={() => setCount((count) => count + 1)}>
				count is {count}
			</button> */}
			<Download/>
		</div>

		<div className="card">
			<p>
				Edit <code>src/App.jsx</code> and save to test HMR
			</p>
		</div>
		<p className="read-the-docs">
		Click on the Vite and React logos to learn more
		</p>
	</>
	)
}

export default App
