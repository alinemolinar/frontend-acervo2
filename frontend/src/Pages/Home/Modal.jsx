import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { StyledModal } from './Styles';
import { StyledModal2 } from './Styles';
import { ContainerModal } from './Styles';
import { ButtonLoginM } from './Styles';
import { SaidaX } from './Styles';


export default function ModalHome ({isOpen, setModalOpen, children }) {

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
            
            <ButtonLoginM>
                Login
            </ButtonLoginM>
         
            </ContainerModal>
            
        </div>
        )
    }

    return null;
}

