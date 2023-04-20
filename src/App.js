import { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  const iptChangeEventHandler = (e) => {
    setTodo(e.target.value)
  }

  const btnClickEventHandler = (e) => {
    setTodos([...todos, todo])
    setTodo('')
  }

  return (
    <div className="App">
      <div><input onChange={iptChangeEventHandler} value={todo}></input><button onClick={btnClickEventHandler}>추가하기</button></div>
      <div><h2>Todo List</h2></div>
      <div className="TodoCards">
      {todos.map((todo)=>{
        return (
          <div className="TodoCard">{todo}</div>
        )
      })}
        
      </div>
    </div>
  );
}

export default App;
