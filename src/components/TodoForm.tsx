import React, { useState } from 'react';

interface NewTodo {
    addTodo(inputValue: string): void
}



const TodoForm: React.FC<NewTodo> = (props) => {
    const [inputValue, setinputValue] = useState<string>('');

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setinputValue(value)
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        props.addTodo(inputValue);
        setinputValue('')
    }

    return (
        <React.Fragment>
            <div className="row">
                <form className="col s12" onSubmit={handleSubmit}>
                    <div className="row mr_1">
                        <div className="valign-wrapper">
                            <div className="input-field col s6">
                                <label htmlFor="inputValue">Enter your task</label>
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={handleInput}
                                    id="inputValue"
                                    className="materialize-textarea"></input>
                            </div>
                            <div className="col s6">
                                <button
                                    onClick={handleSubmit}
                                    className="btn waves-effect waves-light"
                                    type="submit"
                                    name="action">
                                    ADD TODO
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </React.Fragment>
    )
};

export default TodoForm;
