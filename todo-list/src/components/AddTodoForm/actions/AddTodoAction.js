export const TODO_ADDED = 'TODO_ADDED';

export default function addTodoAction(todoText, selectedUser){
    return{
       type: TODO_ADDED,
       payload: { what: todoText, byWho: selectedUser}
    }
}