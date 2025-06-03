
import { InputCadastro} from "./Styles";
import { InputCadastro2 } from "./Styles";
import { DivTexto2 } from "./Styles";
import { ButtonConta } from "./Styles";
import { ButtonLogin } from "./Styles";
import { DivCadastro } from "./Styles";
import { StyledForm } from "./Styles";
import { useForm } from "react-hook-form";
import { useCreateUser, useGetUsers } from "../../hooks/user";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { userValidationSchema } from "./Utils";
import { zodResolver } from "@hookform/resolvers/zod";

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
          queryKey: ["users"], 
        });
    },
         onError: (err) =>{
            toast.error(err);

         },
    });
    const { data: users, isLoading } = useGetUsers({});
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
            <InputCadastro {...register("nome")} type= "name" placeholder= "Nome"/>
            {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
            <InputCadastro2 {...register("email")} type= "email" placeholder= "E-mail"/>
            {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
            <InputCadastro2 {...register("cargo")} type= "role" placeholder= "Cargo"/>
            {errors.role && <p>{errors.role.message}</p>}
        </div>
        <div>
            <InputCadastro2 {...register("senha")} type= "password" placeholder= "Senha"/>
            {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
             <InputCadastro2 {...register("senha")} type= "password" placeholder= "Repita sua senha"/>
             {errors.password && <p>{errors.password.message}</p>}
        </div>

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

    );
}
export default Cadastro;