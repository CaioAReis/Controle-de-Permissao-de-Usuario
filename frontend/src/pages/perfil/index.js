import React, { useEffect, useState } from 'react';
import { FiXCircle, FiPlusCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import api from '../../services/api';
import './style.css'

export function Perfil() {

    const userName = localStorage.getItem('userName');
    const userId = localStorage.getItem('userId');

    const [recursos, setRecursos] = useState([]);
    const [recursosUser, setRecusosUser] = useState([]);

    useEffect(() => {
          api.get('recurso').then(response => setRecursos(response.data));
          api.get(`usuario/recursos/${userId}`).then(response => setRecusosUser(response.data));
    }, []);

    async function handleDeleteRecurso(id) {
        try {
            await api.delete(`recurso/${id}`);
            setRecursos(recursos.filter(recurso => recurso.id !== id));
            setRecusosUser(recursosUser.filter(recurso => recurso.id !== id));
        } catch (error) {
            alert('Erro ao deletar recurso, tente novamente.');
        }
    }

    return(
        <div className='perfil-container'>
            <header>
                <span><strong>Bem-vindo(a):</strong> {userName}</span>
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

            <div className='recursos-container'>
                <ul>
                    {recursos.map(recurso => (
                    <li key={recurso.id}>
                        <div>
                            <p><strong>Nome: </strong> {recurso.nome} </p>
                        </div>

                        <div className='div-status'>
                            <p><strong>Status: </strong> {recurso.status} </p>
                        </div>

                        <div className='div-buttons'>
                            <button className='list-button' style={{ marginRight:'20px' }} ><FiPlusCircle size={30} color='#a8a095' /> </button>
                            <button 
                                className='list-button'
                                onClick={() => handleDeleteRecurso(recurso.id)}><FiXCircle size={30} color='#a8a095' /> </button>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>

            <h1>Recusos permitidos para o usuário:</h1>

            <div className='recursos-container' >
                <ul>
                    {recursosUser.map(recursoU => (
                    <li key={recursoU.id}>
                        <div>
                            <p><strong>Nome: </strong> {recursoU.nome} </p>
                        </div>

                        <div className='div-status'>
                            <p><strong>Status: </strong> {recursoU.status} </p>
                        </div>

                        <div className='div-buttons'>
                            <button className='list-button'><FiXCircle size={30} color='#a8a095' /> </button>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}