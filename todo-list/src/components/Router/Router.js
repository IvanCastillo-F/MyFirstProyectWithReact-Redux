import {BrowserRouter , Switch, Route, Link, Redirect} from 'react-router-dom';
import TodosPage from '../../pages/TodosPage';
import UsersPage from '../../pages/UsersPage';

export default function Router(){
    return (
        <div>
            <BrowserRouter>
              <ul>
                  <li>
                      <Link to="/todos">ToDo's</Link>
                  </li>
                  <li>
                  <Link to="/users">Users</Link>
                  </li>
              </ul>
              <Switch>
                  <Route path="/todos" component={TodosPage} />
                  <Route path="/users" component={UsersPage} />
                  <Redirect exact path="/" to="todos" />
              </Switch>
            </BrowserRouter>
        </div>
    );
}