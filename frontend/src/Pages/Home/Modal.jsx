import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { StyledModal } from './Styles';
import { StyledModal2 } from './Styles';
import { ContainerModal } from './Styles';
import { ButtonLoginM } from './Styles';
import { SaidaX } from './Styles';
import { StyledFormH } from './Styles';
import { useForm } from 'react-hook-form';
import { useGetSessoes, useCreateSessao, useDeleteSessao } from '../../hooks/sessoes';

export default function ModalHome ({isOpen, setModalOpen, children }) {

    const {
        handleSubmit,
        register,
        formState: { errors },
     } = useForm({});
    
     const {mutate: postSessao, isPending} = useCreateSessao({});
    
    
       const [openModal, setOpenModal] = useState(false)
    
        const { data: sessoes, isLoading } = useGetSessoes({});
        const [usuarios] = useState([]);
        const [carregando, setCarregando] = useState(false);
        //onSubmit
        function response(data) {
    
        }

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
            <StyledFormH onSubmit = {handleSubmit(response)}>
            <ButtonLoginM>
                Login
            </ButtonLoginM>
         </StyledFormH>
            </ContainerModal>
            
        </div>
        )
    }

    return null;
}

