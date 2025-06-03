
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

function Login(){
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const token = useAuthStore((state) => state.token);
  const usuario = useAuthStore((state) => state.usuario);
  const setToken = useAuthStore((state) => state.setToken);
  console.log({ token, usuario });
  
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try{
      setCarregando(true);
      const res = await api.post("/login", { email, senha });
      const { token } = res.data;

      setToken(token);

    } catch (erro) {
     console.error(erro);
     alert(erro.message);

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
          <ButtonCadastro>
                aqui.
          </ButtonCadastro>

          </DivTextoL>


          <ButtonEntrar type= "submit">
            ENTRAR
          </ButtonEntrar>


          </StyledFormL>

        </div>
    )
}

export default Login