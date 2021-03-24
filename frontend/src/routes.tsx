import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Login } from './pages/Login';
import { Cadastrar } from './pages/cadastrar';
import { Perfil } from './pages/perfil';

export function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/cadastrar' component={Cadastrar} />
                <Route path='/perfil' component={Perfil} />
            </Switch>
        </BrowserRouter>
    );
}