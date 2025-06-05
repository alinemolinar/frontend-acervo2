
import { useState } from "react"
import { DivLogin } from "./Styles"
import { InputLogin } from "./Styles"
import { InputLogin2 } from "./Styles"
import { DivTextoL } from "./Styles"
import { ButtonCadastro } from "./Styles"
import { ButtonEntrar } from "./Styles"
import { StyledFormL } from "./Styles"
import { Container } from "./Styles"
import api from "../../services/api/api"
import useAuthStore from "../../stores/auth"
import { Link, useNavigate } from "react-router-dom"
import { LinkCadastro } from "./Styles"

function Login(){
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const setToken = useAuthStore((state) => state.setToken);
  const navigate = useNavigate();
  
  
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try{
      setCarregando(true);
      const res = await api.post("/login", { email, senha });
      const { token } = res.data;

      setToken(token);
      navigate("/");

    } catch (erro) {
     console.error(erro);
     alert(erro.response.data.message);

    } finally {
      setCarregando(false);
    }

  };

  if (carregando)
   return (
   <Container>
<h1>Carregando...</h1>
  </Container>
  );

    return(
        <div>
          
          <StyledFormL onSubmit={handleSubmit}>
        
           <DivLogin>
            LOGIN
           </DivLogin>

           <InputLogin type= "email" placeholder= "E-mail"
           required onChange={(e) => setEmail(e.target.value)}
           />
          <InputLogin2 type= "password" placeholder= "Senha"
          required onChange={(e) => setSenha(e.target.value)}
          />
          
          <DivTextoL>
          Não tem login? Faça seu cadastro
          
            <LinkCadastro to= "/cadastro">
                aqui.
                </LinkCadastro>
        

          </DivTextoL>


          <ButtonEntrar type= "submit">
            ENTRAR
          </ButtonEntrar>


          </StyledFormL>

        </div>
    )
}

export default Login