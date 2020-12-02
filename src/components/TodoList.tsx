import React from 'react'

const TodoList: React.FC = () => {
    return (
        <React.Fragment>
            <ul className="collection">
                <li className="collection-item">
                    <div className="valign-wrapper" style={{ justifyContent: "space-between" }}>
                        <label>
                            <input type="checkbox" />
                            <span>Red</span>
                        </label>
                        <span>
                            <i className="small material-icons right ">delete_forever</i>
                        </span>
                    </div>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default TodoList;