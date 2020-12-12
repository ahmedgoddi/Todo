import {ADD_TODO, DELETE_TODO , EDIT_TASK , TOGGLE_COMPLETE  , FILTER_TASKS} from "../const"


const initState = {
    todos : [{text : "learn React-redux" , isComplete : false , id : 0}],
    filterTask : "no-filter"

}


export default function (state = initState , action) {
    switch (action.type) {
        case ADD_TODO :
        return {...state , todos : [...state.todos , action.payload]};
        
        case DELETE_TODO :
        return {...state , todos : state.todos.filter((todo) => todo.id !== action.payload)};
        
        case TOGGLE_COMPLETE :
        return{...state , todos : state.todos.map((todo) => todo.id === action.payload ? {...todo , isComplete : !todo.isComplete } 
        : todo
        )};
        
        case EDIT_TASK :
        return {...state , todos : state.todos.map((todo) => todo.id === action.payload.id ? action.payload
        : todo
        )};
        
        case FILTER_TASKS:
        return { ...state, filterTask: action.payload };
        
        default :
        return state;
    }
}