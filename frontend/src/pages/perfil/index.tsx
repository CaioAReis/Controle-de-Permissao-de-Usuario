
import './style.css'

export function Perfil() {
    return(
        <div className='perfil-container'>
            <header>
                <span>Bem-vindo(a): Caio AReis</span>

                <button className='button'>Alterar Dados</button>
                <button className='sair'>Sair</button>
            </header>

            <h1>Recursos disponíveis:</h1>

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
                            <button>Deletar</button>
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
                            <button>Deletar</button>
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
                            <button>Deletar</button>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    );
}