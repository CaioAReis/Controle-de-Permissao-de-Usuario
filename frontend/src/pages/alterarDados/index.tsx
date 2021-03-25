import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css'

export function AlterarDados() {
    return(
        <div className="containerXY">
            <section className='form-container'>
                <form className='alterar' action="" method="post">
                    
                    <div className="superior">
                        <Link to='/perfil'> <FiArrowLeft size={40} color='#a8a095' /> </Link>
                        <h1>Alterar dados do usuário</h1>
                    </div>

                    <input name='nome' placeholder='Nome' defaultValue='Caio Almeida'/>
                    <input name='Login' placeholder='Login' defaultValue='CaioAReis' />
                    <input type='password' name='senha' placeholder='Senha' defaultValue='1234'/>
                    <input type='email' name='email' placeholder='Email' defaultValue='Caio@mail.com' />
                
                    <div>
                        <div style={{fontSize: '16px', marginBottom: '10px' }} >Data de nascimento:</div>
                        <input type='date' name='data_nascimento' placeholder='Data nascimento'/>
                    </div>

                    <div className='last-input'>
                        <input maxLength={1} name='status' placeholder='Status: A, B etc.' defaultValue='A'/> 
                        <span>-</span>
                        <button className='button' type="submit">Alterar</button>
                    </div>
                    
                </form>
            </section>
        </div>
    );
}