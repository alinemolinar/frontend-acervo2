import { StyledModalInput } from './Styles';
import { StyledModal2 } from './Styles';
import { ContainerModal } from './Styles';
import { ButtonLoginM } from './Styles';
import { SaidaX } from './Styles';


export default function ModalPerfil ({isOpen, setModalOpen, children }) {

    if (isOpen) {
        return (
            <div>

           <ContainerModal>
               <SaidaX onClick ={setModalOpen}>X</SaidaX>
               <div>{children}</div>
                   <StyledModal2>
                Editar usuário

            </StyledModal2>
             <StyledModalInput type= "text" placeholder= "Nome"/>
             <StyledModalInput  type= "email" placeholder= "E-mail"/>
             <StyledModalInput type= "text" placeholder= "Cargo"/>
             <StyledModalInput type= "password" placeholder= "Senha" />
             <StyledModalInput  type= "password" placeholder= "Repita sua senha"/>

            <ButtonLoginM>
                Login
            </ButtonLoginM>
         
            </ContainerModal>
            
        </div>
        )
    }

    return null;
}
