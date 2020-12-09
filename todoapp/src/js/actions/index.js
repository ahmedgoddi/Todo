import {TOGGLE_COMPLETE, DELETE_TODO, ADD_TODO , EDIT_TASK , COMPLETED ,UNCOMPLETED } from "../const"


export const addTodo = (newTodo) => ({
type : ADD_TODO,
payload : newTodo,

})


export const DeleteTodo = (id) => ({
    type : DELETE_TODO,
    payload : id ,

})

export const Toggle = (id) => ({
    type : TOGGLE_COMPLETE,
    payload : id,

})

export const editTask = (newTask) => ({
    type : EDIT_TASK,
    payload : newTask,

})



