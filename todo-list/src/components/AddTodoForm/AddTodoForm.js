import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import addTodoAction from './actions/AddTodoAction';
import SelectUserDropdown from './SelectUserDropdown';

export default function AddTodoForm(){
    const[todoText, setTodoText] = React.useState('');
    const [selectedUser, setSlectedUser] = React.useState('');

    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    function handleTodoText(event){
       const value = event.target.value;
       setTodoText(value);
    }

    function handleSelectedUserChange(event){
        const value = event.target.value;
        setSlectedUser(value);
    }

    function handleTodoSubmittion(event){
        event.preventDefault();
        const action = addTodoAction(todoText, selectedUser);
        dispatch(action);
        resetForm();
    }

    function resetForm(){
        setTodoText('');
    }

    return(
<form onSubmit={handleTodoSubmittion}>
    <label>To Do</label>
    <br/>
    <input type="text" value={todoText} onChange={handleTodoText} />
    <SelectUserDropdown users={users} selectedUser={selectedUser} onUserSelected={handleSelectedUserChange} />
    <button type="submit">Add Todo</button>
</form>
    );
}