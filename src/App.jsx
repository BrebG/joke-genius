import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [setup, setSetup] = useState();

	async function getSetup() {
		await fetch('https://official-joke-api.appspot.com/random_joke')
			.then((response) => response.json())
			.then((response) => {
				setSetup(response);
			})
			.catch((err) => console.error(err));
	}

	const DelayedMessage = () => {
		const [message, setMessage] = useState('');

		useEffect(() => {
			const timeoutId = setTimeout(() => {
				setMessage(`${setup?.punchline}`);
			}, 2000);
			return () => clearTimeout(timeoutId);
		}, []);

		return <div>{setup == undefined ? <h2></h2> : <h2>{message}</h2>}</div>;
	};

	return (
		<>
			<h1>Joke Genius</h1>
			<h2>{setup?.setup}</h2>
			<DelayedMessage />
			<button onClick={getSetup}>Get joke</button>
		</>
	);
}

export default App;
