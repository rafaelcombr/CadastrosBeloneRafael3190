import { Link } from 'react-router-dom'

export default function Iniciar() {
    return (
        <div>
            <p>Seja bem-vindo(a) a página inicial!</p>
            <Link to="/entrar"><input type="button" value="Entrar" /></Link>
        </div>
    )
}