import { useLoaderData } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

function Kanye() {
    const quote = useLoaderData();
    const [setup, setSetup] = useState();

    async function getKanyeQuote() {
        await fetch('https://api.kanye.rest/')
            .then((response) => response.json())
            .then((response) => {
                setSetup(response);
            })
            .catch((err) => console.error(err));
    }

    return (
        <>
            <h1>Best Kanye quotes</h1>
            <div className='padding-text'>
                {setup == undefined ? <h2>{quote?.quote}</h2> : <h2>{setup?.quote}</h2>}
            </div>
            <button onClick={getKanyeQuote}>Get another one of the best Kanye's quote</button>
        </>
    );
}

export default Kanye;
