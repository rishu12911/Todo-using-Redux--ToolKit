// App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './redux/todoSlice';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      dispatch(addTodo(e.target.value.trim()));
      e.target.value = '';
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Add todo"
        onKeyPress={handleAddTodo}
      />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
            <button onClick={(e) => { e.stopPropagation(); handleDeleteTodo(todo.id) }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
