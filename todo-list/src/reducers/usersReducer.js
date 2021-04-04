import {USER_ADDED} from '../components/AddUserForm/actions/AddUserAction'
const initialState = [];

export default function usersReducer(usersState = initialState, action){
   switch(action.type){
       case USER_ADDED:
           return[
               ...usersState,
               action.payload
           ];
       default:
           return usersState;
   }
}