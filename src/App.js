import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk ', 'Take the rubbish out']);
  const [input, setInput] = useState(''); 
  return (
    <div className="App">
      <h1>Hello from foushware 🚀  </h1>
      <input value={input} onChange={e=>setInput(e.target.value)} />
      <button>Add Todo</button>
      <ul>
        {
          todos.map((todo, index) => (<li>{todo}</li>))
        }
      </ul>
    </div>
  );
}

export default App;
