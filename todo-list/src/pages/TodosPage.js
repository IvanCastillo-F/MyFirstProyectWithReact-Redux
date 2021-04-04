import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList'

export default function TodosPage(){
    return(
        <div>
            <AddTodoForm/>
            <TodoList/>
        </div>
    );
}