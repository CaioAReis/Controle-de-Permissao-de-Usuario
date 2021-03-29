import React, { useEffect, useState } from 'react';
import { FiXCircle, FiPlusCircle, FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import api from '../../services/api';
import './style.css'

export function Perfil() {

    const userName = localStorage.getItem('userName');
    const userId = localStorage.getItem('userId');

    const [recursos, setRecursos] = useState([]);
    const [recursosUser, setRecusosUser] = useState([]);
    const [pesquisa, setPesquisa] = useState(recursosUser);
    const [status, setStatus] = useState('');

    useEffect(() => {
          api.get('recurso').then(response => setRecursos(response.data));
          api.get(`usuario/recursos/${userId}`).then(response => setRecusosUser(response.data));
    }, [userId]);

    async function handleDeleteRecurso(id) {
        try {
            await api.delete(`recurso/${id}`);
            setRecursos(recursos.filter(recurso => recurso.id !== id));
            setRecusosUser(recursosUser.filter(recurso => recurso.id !== id));
        } catch (error) {
            alert('Erro ao deletar recurso, tente novamente.');
        }
    }

    async function handlePermitirRecurso(userId, recursoO) {
        try {
            await api.post(`usuario/permissao/${userId}/${recursoO.id}`);
            await api.get(`usuario/recursos/${userId}`).then(response => setRecusosUser(response.data));
        } catch (error) {
            alert('Erro tentar ao permitir acesso do recurso ao usuário, tente novamente.')
        }
    }

    async function handlePesquisa(e) {
        e.preventDefault();
        try {
            setPesquisa(recursosUser.filter(rec => rec.status === status));
        } catch (error) {
            alert('Erro ao pesquisar, tente novamente.');
        }
    }

    return(
        <div className='perfil-container'>
            <header>
                <span><strong>Bem-vindo(a):</strong> {userName}</span>
                <div className='div-buttons-top'>
                    <Link to='/alterarDados' className='alterar'>
                        <button className='button'>Alterar Dados</button>
                    </Link>
                    <Link to='/' >
                        <button className='sair' onClick={() => localStorage.clear()}>Sair</button>
                    </Link>
                </div>
            </header>

            <div className='first-div'>
                <h1>Recursos disponíveis:</h1>
                <Link to='/novoRecurso'><button className='button'>Criar novo recurso</button></Link>
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
                            <button 
                                className='list-button' 
                                style={{ marginRight:'20px' }}
                                title='Permitir recurso ao usuário'
                                onClick={() => handlePermitirRecurso(userId, recurso)}><FiPlusCircle size={30} color='#a8a095' /> </button>
                            <button 
                                className='list-button'
                                title='Deletar recurso'
                                onClick={() => handleDeleteRecurso(recurso.id)}><FiXCircle size={30} color='#a8a095' /> </button>
                        </div>
                    </li> ))}
                </ul>
            </div>

            <div className='title-div'>
                <h1>Recusos permitidos para o usuário:</h1>
                <div>
                    <h1>Filtar por status:</h1>
                    <form style={{display: 'flex'}} onSubmit={handlePesquisa} >
                        <input
                            pattern='[A-Z]{1}' 
                            placeholder='A' 
                            maxLength={1}
                            onChange={e => setStatus(e.target.value)}/>

                        <button type='submit' className='button-search' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} > <FiSearch size={30} color='#FFF' /></button>
                    </form>
                </div>
            </div>

            <div className='user-div'>
                
                <div className='recursos-container' style={{width: '49%'}}>
                    <ul>
                        {recursosUser.map(recursoU => (
                        <li key={recursoU.id}>
                            <div>
                                <p><strong>Nome: </strong> {recursoU.nome} </p>
                            </div>

                            <div style={{textAlign: 'end'}}>
                                <p><strong>Status: </strong> {recursoU.status} </p>
                            </div>
                        </li>))}
                    </ul>
                </div>

                <div className='recursos-container' style={{width: '49%'}}>
                    <ul>
                        {pesquisa.map(recurso => (
                        <li key={recurso.id}>
                            <div>
                                <p><strong>Nome: </strong> {recurso.nome} </p>
                            </div>

                            <div style={{textAlign: 'end'}}>
                                <p><strong>Status: </strong> {recurso.status} </p>
                            </div>
                        </li>))}
                    </ul>
                </div>

            </div>
        </div>
    );
}