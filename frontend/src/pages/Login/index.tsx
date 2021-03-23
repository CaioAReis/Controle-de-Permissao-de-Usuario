import { Link } from 'react-router-dom';

import './style.css';

export function Login() {
    return(
        <section className='form-container'>
            <form className='login' action="" method="post">
                <h1>Login</h1>

                <input name='Login' placeholder='Login'/>
                <input type='password' name='senha' placeholder='Senha'/>

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
    );
}