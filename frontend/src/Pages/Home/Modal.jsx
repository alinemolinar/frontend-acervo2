import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { StyledModal } from './Styles';
import { StyledModal2 } from './Styles';
import { ContainerModal } from './Styles';
import { ButtonLoginM } from './Styles';
import { SaidaX } from './Styles';
import { StyledFormH } from './Styles';
import { useForm } from 'react-hook-form';
import { useQueryClient } from '@tanstack/react-query';
import { useGetSessoes, useCreateSessao, useDeleteSessao } from '../../hooks/sessoes';
import useAuthStore from '../../stores/auth';



export default function ModalHome ({isOpen, setModalOpen, children }) {

    //const {
   //     handleSubmit,
   //     register,
    //    formState: { errors },
    // } = useForm({});
    
   //  const {mutate: postSessao, isPending} = useCreateSessao({});
    
    
       const [openModal, setOpenModal] = useState(false)
    
      //  const { data: sessoes, isLoading } = useGetSessoes({});
       // const [usuarios] = useState([]);
       // const [carregando, setCarregando] = useState(false);
        //onSubmit
      //  function response(data) {
    
    //    }

    const queryClient = useQueryClient();
    const { usuario, token } = useAuthStore();
    const { mutate: registrarSessao, isPending: isRegisteringSessao } = useCreateSessao();


    const handlePostSessao = () => {
    
        if (!token || !usuario || !usuario.id) { 
            alert("Erro: Usuário não autenticado ou ID do usuário indisponível no token.");
            setModalOpen(); 
            return;
        }

        const currentTimestamp = new Date().toISOString();

        const payload = {
            id_usuario: usuario.id, 
            timestamp: currentTimestamp,
            
        };

        registrarSessao(payload, {
            onSuccess: (response) => {
                alert("Sessão registrada com sucesso!");
                setModalOpen();
                queryClient.invalidateQueries(['sessoes']);
            },
            onError: (error) => {
                console.error("Erro ao registrar sessão:", error);
                alert(`Erro ao registrar sessão: ${error.response?.data?.message || 'Erro desconhecido ao comunicar com o servidor.'}`);
            },
        });
    };



const isButtonDisabled = isRegisteringSessao || !token || !usuario?.id;

    if (isOpen) {
        return (
            <div>

           <ContainerModal>
               <SaidaX onClick ={setModalOpen}>X</SaidaX>
               <div>{children}</div>
                   <StyledModal2>
                Você deseja mesmo fazer o login?

            </StyledModal2>
             <StyledModal>
                Tem certeza que você deseja fazer esse login?

            </StyledModal>
            <StyledFormH>
            <ButtonLoginM 
                  onClick={handlePostSessao}
                    disabled={isButtonDisabled}
                    >
                Login
            </ButtonLoginM>
         </StyledFormH>
            </ContainerModal>
            
        </div>
        )
    }

    return null;
}

