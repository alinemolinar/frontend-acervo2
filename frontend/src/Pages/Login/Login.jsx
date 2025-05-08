import { DivColunaL } from "./Styles"
import { DivLogin } from "./Styles"
import { InputLogin } from "./Styles"
import { InputLogin2 } from "./Styles"
import { DivTextoL } from "./Styles"
import { ButtonCadastro } from "./Styles"
import { ButtonEntrar } from "./Styles"

function Login(){

    return(
        <div>
            
           <DivColunaL>
            cpe
           </DivColunaL>

           <DivLogin>
            LOGIN
           </DivLogin>

           <InputLogin type= "email" placeholder= "E-mail"/>
          <InputLogin2 type= "password" placeholder= "Senha"/>
          
          <DivTextoL>
          Não tem login? Faça seu cadastro
          <ButtonCadastro>
                aqui.
          </ButtonCadastro>

          </DivTextoL>


          <ButtonEntrar>
            ENTRAR
          </ButtonEntrar>





        </div>
    )
}

export default Login