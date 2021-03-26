import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Login } from './pages/Login';
import { Cadastrar } from './pages/cadastrar';
import { Perfil } from './pages/perfil';
import { AlterarDados } from './pages/alterarDados';
import { NovoRecurso } from './pages/novoRecurso';

export function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/cadastrar' component={Cadastrar} />
                <Route path='/perfil' component={Perfil} />
                <Route path='/alterarDados' component={AlterarDados} />
                <Route path='/novoRecurso' component={NovoRecurso} />
            </Switch>
        </BrowserRouter>
    );
}