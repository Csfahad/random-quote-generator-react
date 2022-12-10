import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [advice, setAdvice] = useState('');

  useEffect(() => {
    fetchquote();
  }, [])

  function fetchquote()  {
    axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
      const {advice} = response.data.slip;
      setAdvice(advice);
    })
    .catch((error) => {
      console.log(error)
    })
  }
  

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchquote}>
          <span>Give me Advice!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
