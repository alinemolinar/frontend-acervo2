import styled from "styled-components";

export const ContainerU = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
flex-direction: column;
gap: 25px;
`;

export const Dados = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
`;

export const Nome = styled.h1``;

export const Dado = styled.h2``;

export const Valor = styled.span`
color: white;
`;

export const Logo = styled.div`
display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;

  img {
    height: 30px;
    margin-right: 0.5rem;
  }
`