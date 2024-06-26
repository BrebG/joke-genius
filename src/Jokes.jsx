import { useEffect, useState } from 'react';
import './App.css';
import './index.css';

function Jokes() {
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
            }, 4000);
            return () => clearTimeout(timeoutId);
        }, []);

        return <div>{setup == undefined ? <h2></h2> : <h2>{message}</h2>}</div>;
    };

    return (
        <>
            <h1>Joke Genius</h1>
            <div className='padding-text'>
                <h2>{setup?.setup}</h2>
                <DelayedMessage />
            </div>
            <button onClick={getSetup}>Get joke</button>
        </>
    );
}

export default Jokes;
