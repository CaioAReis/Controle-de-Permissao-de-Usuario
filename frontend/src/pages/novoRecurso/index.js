import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './style.css';

export function NovoRecurso() {

    const [nome, setNome] = useState('');
    const [status, setStatus] = useState('');

    const history = useHistory();

    async function handleRecurso(e) {
        e.preventDefault();

        const dados = { nome, status };

        try {
            await api.post('recurso', dados);
            alert('Recurso criado com sucesso.');
            history.push('/perfil');
        } catch(error) {
            alert('Erro ao criar recurso, tente novamente.')
        }
    }

    return(
        <div className="containerXY">
            <section className='form-container'>
                <form className='recurso' onSubmit={handleRecurso}>
                    <div className="superior">
                        <Link to='/perfil'><FiArrowLeft size={40} color='#a8a095'/></Link>
                        <h1>Criar novo recurso</h1>
                    </div>
                    
                    <input 
                        placeholder='Nome'
                        value={nome}
                        onChange={e => setNome(e.target.value)}/>

                    <div className='last-input'>
                        <input 
                            maxLength={1} 
                            placeholder='Status: A, B, ...'
                            value={status}
                            onChange={e => setStatus(e.target.value)}/> 
                        <span>-</span>
                        <button className='button' type="submit">Criar</button>
                    </div>
                </form>
            </section>
        </div>
    );
}