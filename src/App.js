import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('first name');
  const insidePar = useRef();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((data) => data.json())
      .then((users) => setName(users));
  });

  return (
    <div className="App">
      <button
        onClick={(item) => {
          setCounter(counter + 1);
          insidePar.current.innerText = name[counter].name;
        }}
      >
        {counter}
      </button>
      <p ref={insidePar}></p>
    </div>
  );
}

export default App;
