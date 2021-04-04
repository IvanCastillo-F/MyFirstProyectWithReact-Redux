import React from 'react';
import {useDispatch} from 'react-redux';
import AddUserAtion from './actions/AddUserAction'

export default function AddUserForm(){
    const [userName, setUserName] = React.useState('');
    const dispatch = useDispatch();

    function handleUserNameChange(event) {
        setUserName(event.target.value);
    }
   
     function handleFormSummit(event){
         event.preventDefault();
         const action = AddUserAtion(userName);
         dispatch(action);
         resetForm();
     }

     function resetForm(){
        setUserName('');
    }

    return(
        <form onSubmit={handleFormSummit}>
            <label>User Name</label>
            <br></br>
            <input type="text" value={userName} onChange={handleUserNameChange} />
            <button type="submit">Add User</button>
        </form>
    );
}