import { TODO_ADDED } from "../components/AddTodoForm/actions/AddTodoAction";

const initialState = [];

export default function todosReducer(todosState = initialState, action){
    switch(action.type){
        case TODO_ADDED:
           return[
               ...todosState,
               action.payload
           ] ;
           default:
               return todosState;
    }
}