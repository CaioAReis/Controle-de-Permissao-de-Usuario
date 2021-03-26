import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import './style.css';

export function Login() {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const dados = {login, senha};
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('usuario/autenticar', dados);
            
            localStorage.setItem('userId', response.data.id);
            localStorage.setItem('userName', response.data.nome);
            localStorage.setItem('userLogin', login);
            localStorage.setItem('userEmail', response.data.email);
            localStorage.setItem('userData', response.data.data_nascimento);
            localStorage.setItem('userStatus', response.data.status);

            history.push('/perfil');
        } catch (error) {
            alert('Erro no login, tente novamente.');
        }
    }

    return(
       <div className="containerXY">
            <section className='form-container' >
                <form className='login' onSubmit={handleLogin}>
                    <h1>Login</h1>

                    <input 
                        placeholder='Login'
                        value={login}
                        onChange={e => setLogin(e.target.value)}/>

                    <input 
                        type='password' 
                        placeholder='Senha'
                        value={senha}
                        onChange={e => setSenha(e.target.value)}/>

                    <div>
                        <strong>
                            <Link to='/cadastrar'>Cadastre-se</Link>
                        </strong>
                        <div>
                            <button className='button' type="submit">Entrar</button>
                        </div>
                    </div>
                </form>
            </section>
       </div>
    );
}