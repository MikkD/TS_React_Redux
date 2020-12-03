import React, { useState } from 'react';
import { ITodoItem } from '../App';

interface TodoItems {
    todos: ITodoItem[],
    deleteTodo(id: number): void
    toggleTodo(id: number): void
}


const TodoList: React.FC<TodoItems> = ({ todos, deleteTodo, toggleTodo }) => {

    return todos.length > 0 ?
        (
            <React.Fragment>
                <ul className="collection">
                    {todos.map(todo => {
                        return (
                            <li key={todo.id} className="collection-item">
                                <div className="valign-wrapper" style={{ justifyContent: "space-between" }}>
                                    <label>
                                        <input type="checkbox" checked={todo.isCompleted} onChange={() => toggleTodo(todo.id)} />
                                        <span className={todo.isCompleted ? "completed" : "not_completed"}>{todo.title}</span>
                                    </label>
                                    <span
                                        onClick={() => deleteTodo(todo.id)}
                                        style={{ cursor: "pointer" }}>
                                        <i className="small material-icons right ">delete_forever</i>
                                    </span>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </React.Fragment>
        ) : <h5>Todo list is empty</h5>
}

export default TodoList;