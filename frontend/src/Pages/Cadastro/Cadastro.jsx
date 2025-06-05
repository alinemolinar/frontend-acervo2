
import { InputCadastro} from "./Styles";
import { InputCadastro2 } from "./Styles";
import { DivTexto2 } from "./Styles";
import { ButtonConta } from "./Styles";
import { DivCadastro } from "./Styles";
import { StyledForm } from "./Styles";
import { useForm } from "react-hook-form";
import { useCreateUser } from "../../hooks/user";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { userValidationSchema } from "./Utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { LinkCL } from "./Styles";
import { LinkLogin } from "./Styles";




function Cadastro() {
    const queryClient = useQueryClient();
//hooks
    const{
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm({ resolver:zodResolver(userValidationSchema) });
    const { mutate: postUser, inPending } = useCreateUser({
        onSuccess: () => {
          toast.success("Usuário cadastrado com sucesso!");
          queryClient.invalidateQueries({
          queryKey: ["usuarios"], 
        });
    },
         onError: (err) =>{
            toast.error(err);

         },
    });
    //onSubmit
    function response(data){
        console.log("cheguei");
        postUser(data);
        reset();

    }

    return (
        <>
        
        <StyledForm onSubmit = {handleSubmit(response)}>
    
        
        <DivCadastro>
            CADASTRO
        </DivCadastro>
        <div>
            <InputCadastro {...register("nome")} type= "text" placeholder= "Nome"/>
            {errors.nome && <p>{errors.nome.message}</p>}
        </div>
        <div>
            <InputCadastro2 {...register("email")} type= "email" placeholder= "E-mail"/>
            {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
            <InputCadastro2 {...register("cargo")} type= "text" placeholder= "Cargo"/>
            {errors.cargo && <p>{errors.cargo.message}</p>}
        </div>
        <div>
            <InputCadastro2 {...register("senha")} type= "password" placeholder= "Senha"/>
            {errors.senha && <p>{errors.senha.message}</p>}
        </div>
        <div>
             <InputCadastro2 {...register("confirmaSenha")} type= "password" placeholder= "Repita sua senha"/>
             {errors.confirmaSenha && <p>{errors.confirmaSenha.message}</p>}
        </div>

        <DivTexto2>
        Já tem uma conta? Faça o login
        
            <LinkLogin to = "/login">
            aqui.
            </LinkLogin>
        
        </DivTexto2>

        

        <ButtonConta>
        CRIAR CONTA
        </ButtonConta>
        

        
         </StyledForm>
          
    
      
    

        </>

    );
}
export default Cadastro;