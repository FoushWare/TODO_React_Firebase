import React, { useState } from 'react';
import './App.css';
import { Button,FormControl,Input,InputLabel } from '@material-ui/core';
import Todo from './Todo';


function App() { 
  const [todos, setTodos] = useState(['Take dogs for a walk ', 'Take the rubbish out']);
  const [input, setInput] = useState('');
  console.log('🧨💣', input); 
  const addTodo = (e) => {
    //This will FIRE OFF when click the button or HIT ENTER  on the Keyboard 
    e.preventDefault(); // will stop REFRESH
    if (input != '') {
      setTodos([...todos, input]);
    }
    setInput(''); //CLEAR UP THE INPUT AFTER CLICKING ADD TODO BUTTON 
  }
  return (
    <div className="App">
      <h1>Hello from foushware TODOS<span role="img" aria-label="jsx-a11y/accessible-emoji">🚀</span>  </h1>
     <form> 

      <FormControl>
        <InputLabel >✍  Write a Todo</InputLabel>
        <Input value={input} onChange={e => setInput(e.target.value)} />
       
      </FormControl>
      <Button type="submit" onClick={addTodo} disabled={!input} variant="contained" color="primary">
          Add Todo ✔️
        </Button>

      </form> 
      <ul>
        {
          todos.map((todo, index) => (<Todo index={index} text={todo}/>))
        }
      </ul>
    </div>
  );
}

export default App;

