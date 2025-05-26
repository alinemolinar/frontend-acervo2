import { DivColuna } from "./Styles";
import { InputCadastro} from "./Styles";
import { InputCadastro2 } from "./Styles";
import { DivTexto2 } from "./Styles";
import { ButtonConta } from "./Styles";
import { ButtonLogin } from "./Styles";
import { DivCadastro } from "./Styles";
import { StyledForm } from "./Styles";
import { useForm } from "react-hook-form";
import { useCreateUser } from "../../hooks/user";

function Cadastro() {
//hooks
    const{
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({});
    const { mutate: postUser, inPending } = useCreateUser({});
    //onSubmit
    function response(data){
        console.log("cheguei");
        postUser(data);

    }

    return (
        <>
        
        <StyledForm onSubmit = {handleSubmit(response)}>
        <DivColuna>
        cpe
        </DivColuna>
        
        <DivCadastro>
            CADASTRO
        </DivCadastro>

        <InputCadastro {...register("nome")} type= "name" placeholder= "Nome"/>
        <InputCadastro2 {...register("email")} type= "email" placeholder= "E-mail"/>
        <InputCadastro2 {...register("cargo")} type= "role" placeholder= "Cargo"/>
        <InputCadastro2 {...register("senha")} type= "password" placeholder= "Senha"/>
        <InputCadastro2 {...register("senha")} type= "password" placeholder= "Repita sua senha"/>

        <DivTexto2>
        Já tem uma conta? Faça o login
        <ButtonLogin>
            aqui.
        </ButtonLogin>
        </DivTexto2>

        

        <ButtonConta>
            CRIAR CONTA
        </ButtonConta>
        

        
         </StyledForm>

        </>

    )
}
export default Cadastro;