import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Login } from './pages/Login';
import { Cadastrar } from './pages/cadastrar';

export function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/cadastrar' component={Cadastrar} />
            </Switch>
        </BrowserRouter>
    );
}