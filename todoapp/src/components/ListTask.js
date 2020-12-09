import React from 'react'
import TaskCard from './TaskCard'
import {connect} from "react-redux"


const ListTask = ({todoList}) => 
    {
        return (
        <div className="todo-list">
        {todoList.map((el) => 
        <TaskCard key={el.id} todo={el}/>
        )}
        </div>
    )
}

const mapStateToProps = (state) =>({
    todoList : state.todos
})

export default connect(mapStateToProps) (ListTask)

