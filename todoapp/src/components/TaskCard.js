import React from 'react'
import {connect} from "react-redux"
import {DeleteTodo , editTask , Toggle} from "../js/actions"
import EditForm from './EditForm'


const TaskCard = ({todo , DeleteTodo , Toggle}) => 
    {
        return (
        <div className="todo-card">
            <p style={todo.isComplete ? { textDecoration : "line-through" , opacity : "0.3"} : {}}>{todo.text}</p>
            <div>
                <button onClick={() => Toggle(todo.id)}>COMPLETE</button>
                <button onClick={() => DeleteTodo(todo.id)}>DELETE</button>
                <EditForm oldTodo={todo}/>
            </div>
        </div>
    )
    }


    export default connect(null , {DeleteTodo , editTask , Toggle}) (TaskCard)