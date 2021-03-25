import { FiXCircle, FiPlusCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import './style.css'

export function Perfil() {
    return(
        <div className='perfil-container'>
            <header>
                <span>Bem-vindo(a): Caio AReis</span>
                <div style={{display: 'flex', width: '250px', marginLeft: 'auto'}}>
                    <Link to='/alterarDados' className='alterar'>
                        <button className='button'>Alterar Dados</button>
                    </Link>
                    <Link to='/' >
                        <button className='sair'>Sair</button>
                    </Link>
                </div>
            </header>

            <div style={{ display: 'flex', alignItems: 'center' }} >
                <h1>Recursos disponíveis:</h1>
                <Link to='/novoRecurso' style={{width: '230px', marginLeft: 'auto'}}><button className='button'>Criar novo recurso</button></Link>
            </div>

            <div className='recursos-container' >
                <ul>
                    <li>
                        <div>
                            <p><strong>Nome: </strong> Recurso 001</p>
                        </div>

                        <div style={{textAlign: 'center' }} >
                            <p><strong>Status: </strong> A</p>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end'}} >
                            <button className='list-button' style={{ marginRight:'20px' }} ><FiPlusCircle size={30} color='#a8a095' /> </button>
                            <button className='list-button' ><FiXCircle size={30} color='#a8a095' /> </button>
                        </div>
                    </li>

                    <li>
                        <div>
                            <p><strong>Nome: </strong> Recurso 001</p>
                        </div>

                        <div style={{textAlign: 'center' }} >
                            <p><strong>Status: </strong> A</p>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end'}} >
                            <button className='list-button' style={{marginRight:'20px'}} ><FiPlusCircle size={30} color='#a8a095' /> </button>
                            <button className='list-button' ><FiXCircle size={30} color='#a8a095' /> </button>
                        </div>
                    </li>

                    <li>
                        <div>
                            <p><strong>Nome: </strong> Recurso 001</p>
                        </div>

                        <div style={{textAlign: 'center' }} >
                            <p><strong>Status: </strong> A</p>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end'}} >
                            <button className='list-button' style={{ marginRight:'20px' }} ><FiPlusCircle size={30} color='#a8a095' /> </button>
                            <button className='list-button' ><FiXCircle size={30} color='#a8a095' /> </button>
                        </div>
                    </li>
                </ul>
            </div>

            <h1>Recusos permitidos para o usuário:</h1>

            <div className='recursos-container' >
                <ul>
                    <li>
                        <div>
                            <p><strong>Nome: </strong> Recurso 001</p>
                        </div>

                        <div style={{textAlign: 'center' }} >
                            <p><strong>Status: </strong> A</p>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end'}} >
                            <button className='list-button' ><FiXCircle size={30} color='#a8a095' /> </button>
                        </div>
                    </li>

                    <li>
                        <div>
                            <p><strong>Nome: </strong> Recurso 001</p>
                        </div>

                        <div style={{textAlign: 'center' }} >
                            <p><strong>Status: </strong> A</p>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end'}} >
                            <button className='list-button' ><FiXCircle size={30} color='#a8a095' /> </button>
                        </div>
                    </li>

                    <li>
                        <div>
                            <p><strong>Nome: </strong> Recurso 001</p>
                        </div>

                        <div style={{textAlign: 'center' }} >
                            <p><strong>Status: </strong> A</p>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end'}} >
                            <button className='list-button' ><FiXCircle size={30} color='#a8a095' /> </button>
                        </div>
                    </li>
                </ul>
            </div>

            {/* <div className="novo-recurso-container"></div> */}

        </div>
    );
}