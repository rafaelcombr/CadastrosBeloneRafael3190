import { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import axios from 'axios';

export default function Entrar() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await axios.post('http://localhost:8000/entrar/', {
            username,
            password,
          });
        
          if (response.status === 200) {
            navigate('/cadastrar');
          }
        } catch (b) {
            setError(b);
            console.error(b);
        }
      };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(Error());
    const navigate = useNavigate();
      

    return (
        <div>
            <h1>Tela de entrar</h1>
            <form onSubmit={handleSubmit} method='post'>
                <label htmlFor="nome">Nome:</label>
                <input type="text" name="nome" id="nome" placeholder="Ex: João Silva" value={username} onChange={(user) => setUsername(user.target.value)} /><br /><br />
                <label htmlFor="senha">Senha:</label>
                <input type="password" name="senha" id="senha" placeholder="Ex: 123456789" value={password} onChange={(senha) => setPassword(senha.target.value)} /><br /><br />
                <input type="submit" value="Entrar" />
                <Link to="/"><input type="button" value="Voltar" /></Link>
            </form>
        </div>
    )
}