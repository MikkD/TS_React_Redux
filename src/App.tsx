import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export interface ITodoItem {
  title: string,
  id: number,
  isCompleted: boolean
}


const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<ITodoItem>>([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(storageTodos)

  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))

  }, [todos]);


  const addTodo = (todo: string) => {
    const newTodo: ITodoItem = {
      title: todo,
      id: Date.now(),
      isCompleted: false
    };
    setTodos(prevState => [newTodo, ...prevState])
  }

  const deleteTodo = (id: number) => setTodos(todos.filter(el => el.id !== id))

  const toggleTodo = (id: number) => {
    const upd_todos = todos.map(el => {
      if (el.id === id) {
        return {
          ...el,
          isCompleted: !el.isCompleted
        }
      }
      return el
    })
    setTodos(upd_todos);

  }


  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <TodoForm addTodo={addTodo} />
        <TodoList deleteTodo={deleteTodo} toggleTodo={toggleTodo} todos={todos} />

      </div>

    </div >
  );
}

export default App;
