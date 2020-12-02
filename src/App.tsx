import React, { useState } from 'react';
import NavBar from './components/NavBar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const App: React.FC = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo: string) => {

  }
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <TodoForm addTodo={addTodo} />
        <TodoList />

      </div>

    </div >
  );
}

export default App;
