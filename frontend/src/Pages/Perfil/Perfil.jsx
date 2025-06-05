import { ContainerP  } from "./Styles";
import useAuthStore from "../../stores/auth";
import  Usuario  from "../../../Components/Usuario/Usuario";
import { ButtonDeslogar } from "./Styles";
import { ButtonEditar } from "./Styles";
import { useEffect, useState } from "react";
import ModalPerfil from "./ModalPerfil";
import { UsuarioContainer } from "./Styles";

export default function Perfil()  {
    const usuario = useAuthStore((state) => state.usuario);
    const clearAuth = useAuthStore((state) => state.clearAuth);
     const [openModal, setOpenModal] = useState(false)
   return (
    <ContainerP>
      
       <UsuarioContainer>
       <Usuario usuario={usuario} />
       </UsuarioContainer>

       

      <ButtonEditar onClick={() => setOpenModal(true)}>
                                EDITAR
                   </ButtonEditar>
     <ModalPerfil isOpen = {openModal} setModalOpen={() => setOpenModal(!openModal)}>
     
                  </ModalPerfil>
     


      
       <ButtonDeslogar type="button" onClick={clearAuth}>Deslogar</ButtonDeslogar>


    </ContainerP>


   );
}