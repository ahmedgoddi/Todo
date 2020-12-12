import React from 'react'
import TaskCard from './TaskCard'
import {connect} from "react-redux"
import { filterTask } from "../js/actions";

function filterTodos(todoList, filterQuery) {
    // todoList : Array , filterQuery : String
    //filterQuery  ["no-filter" , "done" ,"undone"]
    switch (filterQuery) {
      case "done":
        return todoList.filter((todo) => todo.isComplete === true);
      case "undone":
        return todoList.filter((todo) => todo.isComplete === false);
      case "no-filter":
      default:
        return todoList;
    }
  }



const ListTask = ({todoList , filterQuery}) => 

    {
        const result = filterTodos(todoList, filterQuery);

        return (
        <div className="todo-list">
        {result.map((el) => 
        <TaskCard key={el.id} todo={el}/>
        )}
        </div>
    )
}

const mapStateToProps = (state) =>({
    todoList : state.todos,
    filterQuery: state.filterTask,
})

export default connect(mapStateToProps) (ListTask)

