import { Link } from "react-router-dom";

import './style.css';

export function Cadastrar() {
    return(
        <div className="containerXY">
            <section className='form-container'>
                <form className='cadastro' action="" method="post">
                    <h1>Cadastro de usuário</h1>

                    <input name='nome' placeholder='Nome'/>
                    <input name='Login' placeholder='Login'/>
                    <input type='password' name='senha' placeholder='Senha'/>
                    <input type='email' name='email' placeholder='Email'/>
                
                    <div>
                        <div style={{fontSize: '16px', marginBottom: '10px' }} >Data de nascimento:</div>
                        <input type='date' name='data_nascimento' placeholder='Data nascimento'/>
                    </div>

                    <div className='last-input'>
                        <input name='status' size={1} placeholder='Status: A, B etc.'/> 
                        <span>-</span>
                        <button className='button' type="submit">Cadastar</button>
                    </div>
                    
                    <div className='link-login'>
                        <strong><Link to='/'>Já possui conta?</Link></strong>
                    </div>
                </form>
            </section>
        </div>
    );
}