import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";

import api from '../../services/api';
import './style.css';

export function Cadastrar() {

    const [nome, setNome] = useState('');
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [data_nascimento, setData] = useState('');
    const [status, setStatus] = useState('');

    const history = useHistory();

    async function handleCadastro(e) {
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
            await api.post('usuario', dados);
            alert(`Conta criada com sucesso.  ${nome}`);
            history.push('/');
        } catch(err) {
            console.log(dados);
            alert('Ocorreu um erro no cadastro.');
        }
    }

    return(
        <div className="containerXY">

            <section className='form-container'>
                <form className='cadastro' onSubmit={handleCadastro}>
                    <h1>Cadastro de usuário</h1>

                    <input 
                        name='nome' 
                        placeholder='Nome'
                        value={nome}
                        onChange={ e => setNome(e.target.value)}/>

                    <input 
                        name='Login' 
                        placeholder='Login'
                        value={login}
                        onChange={ e => setLogin(e.target.value)}/>

                    <input 
                        type='password' 
                        placeholder='Senha'
                        value={senha}
                        onChange={ e => setSenha(e.target.value)}/>

                    <input 
                        type='email' 
                        placeholder='Email'
                        value={email}
                        onChange={ e => setEmail(e.target.value)}/>
                
                    <div>
                        <div style={{fontSize: '16px', marginBottom: '10px' }} >Data de nascimento:</div>
                        <input 
                            placeholder='dd/MM/aaaa'
                            value={data_nascimento}
                            onChange={ e => setData(e.target.value)}/>
                    </div>

                    <div className='last-input'>
                        <input 
                            maxLength={1} 
                            placeholder='Status: A, B etc.'
                            pattern="[A-Z]{1}"
                            value={status}
                            onChange={ e => setStatus(e.target.value)}/> 
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