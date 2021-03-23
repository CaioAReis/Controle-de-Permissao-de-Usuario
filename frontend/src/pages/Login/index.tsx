import './style.css';

export function Login() {
    return(
        <section>
           <div>
                <form action="" method="post">

                    <h1>Login</h1>

                    <input name='Login' placeholder='Login'/>
                    <input type='password' name='senha' placeholder='Senha'/>

                    <div>
                        <strong>
                            <a href='#'>Cadastre-se</a>
                        </strong>
                        <div><button className='button' type="submit">Entrar</button></div>
                    </div>
                </form>
           </div>
        </section>
    );
}