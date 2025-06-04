import { DivColuna5 } from "./Styles";
import { ContainerH } from "./Styles";
import { Link,useNavigate } from "react-router-dom";
import useAuthStore from "../../src/stores/auth";

export default function Header() {
    const usuario = useAuthStore((state) => state.usuario);
    const clearAuth = useAuthStore((state) => state.clearAuth);
   const navigate = useNavigate();

    const logout = () => {
        clearAuth()
        navigate("/login")
    }
   
    return <h3>
        <ContainerH>
        <DivColuna5>

            
            <Link to= "/login">Login</Link>
            <Link to= "/cadastro">Cadastro</Link>
           

            
        </DivColuna5>

        {!!usuario && ( 
        <>
          <Link to= "/">Home</Link>
          <Link to= "/perfil">Perfil</Link>
          <h2>Seja bem-vindo {usuario.nome}</h2>
          <button type="button" onClick={logout}>Deslogar</button>
        </>
        )}
        </ContainerH>

    </h3>;
}