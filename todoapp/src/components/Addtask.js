import React , {useState} from 'react'
import {connect} from "react-redux"
import {addTodo} from "../js/actions"

const Addtask = ({addTodo}) => { 
    const [text , setText] = useState("") ;
    const handleSubmit = (event) => {
    event.preventDefault() ;
    
    const newTodo = {
        text : text ,
        id : Date.now() ,
        isComplete : false
    }
    addTodo(newTodo)
    setText("")
    }
    return (
        <div className="add-todo-container">
            <h1>Todo App</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} required/>
                <button type="submit">Add todo</button>
            </form>
        </div>
    )
}


export default connect( null , {addTodo}) (Addtask)