export const USER_ADDED ='USER_ADDED';

export default function AddUserAtion(userName){
     return{
         type: USER_ADDED,
         payload: userName
     };
}