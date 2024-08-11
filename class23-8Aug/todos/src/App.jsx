import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue('');
  };

  const toggleTodo = index => {
    setTodos(todos.map((todo, i) => (
      i === index ? { ...todo, completed: !todo.completed } : todo
    )));
  };

  return (
    <>
     <div>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleTodo(index)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
