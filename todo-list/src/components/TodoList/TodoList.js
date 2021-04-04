import {useSelector} from 'react-redux'

export default function TodoList(){
    const todos = useSelector(state => state.todos);
    return(
        <div>
         {JSON.stringify(todos, undefined, 2)}
        </div>
    )
}