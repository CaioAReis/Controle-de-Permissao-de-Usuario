import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';

export function NovoRecurso() {
    return(
        <div className="containerXY">
            <section className='form-container'>
                <form className='recurso' action="" method="post">

                    <div className="superior">
                        <Link to='/perfil'> <FiArrowLeft size={40} color='#a8a095' /> </Link>
                        <h1>Criar novo recurso</h1>
                    </div>
                    
                    <input name='nome' placeholder='Nome'/>
                    <div className='last-input'>
                        <input name='status' maxLength={1} placeholder='Status: A, B etc.'/> 
                        <span>-</span>
                        <button className='button' type="submit">Criar</button>
                    </div>
                </form>
            </section>
        </div>
    );
}