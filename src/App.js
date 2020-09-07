import React, { useState ,useEffect} from 'react';
import './App.css';
import { Button,FormControl,Input,InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';


function App() { 
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  console.log('🧨💣', input); 
// when the app loads , we need to listen to the database and fetch new todos as they get added/removed
useEffect(() => {
//This code fires when app.js loads ...The connection to the database done when every crud
db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
  console.log('🐧',snapshot.docs.map(doc => doc.data()) )
  setTodos(snapshot.docs.map(doc =>({ id:doc.id,todo:doc.data().todo})))
})
},[]);//runs once when the app.js loads   



  const addTodo = (e) => {
    //This will FIRE OFF when click the button or HIT ENTER  on the Keyboard 
    e.preventDefault(); // will stop REFRESH
    // if (input !== '') {
    //   setTodos([...todos, input]);
    // }
    db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
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
          todos.map((todo) => (<Todo todo={todo}/>))
        }
      </ul>
    </div>
  );
}

export default App;

