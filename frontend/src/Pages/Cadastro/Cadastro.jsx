import { DivColuna } from "./Styles";
import { InputCadastro} from "./Styles";
import { InputCadastro2 } from "./Styles";
import { DivTexto2 } from "./Styles";
import { ButtonConta } from "./Styles";
import { ButtonLogin } from "./Styles";
import { DivCadastro } from "./Styles";



function Cadastro() {

    return (
        <>
        <DivColuna>
        cpe
        </DivColuna>
        
        <DivCadastro>
            CADASTRO
        </DivCadastro>

        <InputCadastro type= "name" placeholder= "Nome"/>
        <InputCadastro2 type= "email" placeholder= "E-mail"/>
        <InputCadastro2 type= "role" placeholder= "Cargo"/>
        <InputCadastro2 type= "password" placeholder= "Senha"/>
        <InputCadastro2 type= "password" placeholder= "Repita sua senha"/>

        <DivTexto2>
        Já tem uma conta? Faça o login
        <ButtonLogin>
            aqui.
        </ButtonLogin>
        </DivTexto2>

        

        <ButtonConta>
            CRIAR CONTA
        </ButtonConta>
        

        


        </>

    )
}
export default Cadastro;