import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css'
import api from '../../services/api';

export function AlterarDados() {

    const [nome, setNome] = useState(localStorage.getItem('userName'));
    const [login, setLogin] = useState(localStorage.getItem('userLogin'));
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState(localStorage.getItem('userEmail'));
    const [data_nascimento, setData] = useState(localStorage.getItem('userData'));
    const [status, setStatus] = useState(localStorage.getItem('userStatus'));

    const history = useHistory();

    async function handleAlterar(e) {
        e.preventDefault();

        const dados = {
            nome,
            login,
            senha,
            email,
            data_nascimento,
            status
        };

        try {
            await api.put(`usuario/${localStorage.getItem('userId')}`, dados);

            localStorage.setItem('userName', nome);
            localStorage.setItem('userLogin', login);
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userData', data_nascimento);
            localStorage.setItem('userStatus', status);

            history.push('/perfil');
        } catch (error) {
            alert('Erro na alteração, tente novamente.')
        }
    }

    return(
        <div className="containerXY">
            <section className='form-container'>
                <form className='alterar' onSubmit={handleAlterar} >
                    
                    <div className="superior">
                        <Link to='/perfil'> <FiArrowLeft size={40} color='#a8a095' /> </Link>
                        <h1>Alterar dados do usuário</h1>
                    </div>

                    <input 
                        placeholder='Nome' 
                        value={nome}
                        onChange={e => setNome(e.target.value)}/>

                    <input 
                        placeholder='Login' 
                        value={login}
                        onChange={e => setLogin(e.target.value)} />
                        
                    <input 
                        type='password' 
                        placeholder='Senha'
                        value={senha}
                        onChange={e => setSenha(e.target.value)}/>

                    <input 
                        type='email' 
                        placeholder='Email' 
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>
                
                    <div>
                        <div style={{fontSize: '16px', marginBottom: '10px' }} >Data de nascimento:</div>
                        <input 
                            placeholder='Data nascimento'
                            value={data_nascimento}
                            onChange={e => setData(e.target.value)}/>
                    </div>

                    <div className='last-input'>
                        <input 
                            maxLength={1} 
                            placeholder='Status: A, B, ...' 
                            value={status}
                            onChange={e => setStatus(e.target.value)}/> 

                        <span>-</span>
                        <button className='button' type="submit">Alterar</button>
                    </div>
                </form>
            </section>
        </div>
    );
}