import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Cadastrar() {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [pessoas, setPessoas] = useState([]);

    useEffect(() => { verIndividuos(); }, []);

    const verIndividuos = async () => {
        const resposta = await axios.get('http://localhost:8000/cadastros/');
        setPessoas(resposta.data);
    };
    const excluir = async (id) => {
        const resposta = await axios.delete(`http://localhost:8000/cadastros/${id}`);
        if (resposta.status === 204) {
            verIndividuos();
        }
    };

    const botao = async (nao_vai_dar_erro) => {
        nao_vai_dar_erro.preventDefault();
        const resposta = await axios.post('http://localhost:8000/cadastros/', { nome, cpf, email, });
        if (resposta.status === 201) { verIndividuos(); }
    }
    return (
        <div>
            <form method='POST' onSubmit={botao}>
                <input type="text" name="nome" id="nome" placeholder='Nome' value={nome} onChange={(nome) => setNome(nome.target.value)} /><br />
                <input type="text" name="cpf" id="cpf" placeholder='CPF' value={cpf} onChange={(cpf) => setCpf(cpf.target.value)} /><br />
                <input type="text" name="email" id="email" placeholder='E-mail' value={email} onChange={(email) => setEmail(email.target.value)} /><br />
                <input type="submit" value="Cadastrar" />
            </form>
            <div>
                {pessoas.map((pessoa) => (
                    <div>
                        <div>
                            <p>Id: {pessoa.id}</p>
                            <p>Nome: {pessoa.nome}</p>
                            <p>CPF: {pessoa.cpf}</p>
                            <p>E-mail: {pessoa.email}</p>
                            <button onClick={() => excluir(pessoa.id)}>Excluir</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}