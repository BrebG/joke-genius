import './App.css';
import { Outlet, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const getJoke = () => {
    navigate("/jokes");
  }
  const getQuote = () => {
    navigate("/kanye");
  }

  return (
    <>
      <div className='app'>
        <h1>Need a joke or some inspiration from Kanye ?</h1>
      </div>
      <div className='navbar'>
        <button onClick={getJoke}>Go get a joke</button>
        <button onClick={getQuote}>Go get a quote</button>
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </>
  )
}

export default App
