import styled from "styled-components";
import { Table } from "antd";
import { Button } from "antd";

export const DivCarousel = styled.div`
width: 45%;
height: 30%;
margin-top: 60px;
margin-left: 400px;
`
export const ContainerHome = styled.div`
min-height: 100vh;
min-height: 100dvh;
justify-content: center;
align-items: center;
`
export const StyledTable = styled(Table)`
margin-top: 10px;
width: 1100px;
margin-left: 200px;
font-weight: 600;
font-family: Arial, Helvetica, sans-serif;
background-color: black;
gap: 20px;


  .ant-table-container {
    background-color: #363636;
    font-size: 20px;
  }
   .ant-table-thead > tr > th {
    background-color:  #FFE712;
    padding-left: 20px;
    font-weight: bold;
    
  }
`
export const ButtonModal = styled.button`
font-size: 15px;
color: #FFE712;
border-color: #FFE712;
background-color: black;
font-family: Arial, Helvetica, sans-serif;
border-radius: 10px;
width: 100px;
height: 30px;
margin-left: 1200px;
margin-top: 100px;
margin-bottom: 10px;
cursor: pointer;
`
export const StyledModal = styled.div`
font-family: Arial, Helvetica, sans-serif;
font-weight: 500;
font-size: 15px;
color: black;
padding-top: 10px;
display: flex;
text-align: center;
padding-left: 10px;


`
export const StyledModal2 = styled.div`
font-family: Arial, Helvetica, sans-serif;
font-weight: 800;
font-size: 15px;
color: black;
padding-top: 5px;
text-align: center;

`

export const ContainerModal =styled.div`
width: 300px;
height: 180px;
background-color: whitesmoke;
border-radius: 20px;
z-index: 1000;
position: fixed;
  top: 300px;
  left: 600px;
  z-index: 999;
 box-shadow: 0 4px 20px black;
`
export const ButtonLoginM = styled.button`
background-color: whitesmoke;
color: #FFE712;
border-color: #FFE712 ;
border-radius: 20px;
font-size: 15px;
width: 60px;
height: 30px;
font-weight: 700;
margin-left: 120px;
margin-top: 10px;
cursor: pointer;

`
export const SaidaX = styled.div`
font-size: 30px;
color: black;
padding-left: 260px;
padding-top: 10px;
font-weight: 600;
cursor: pointer;
`

export const StyledFormH = styled.form`
display: flex;
flex-direction: column;
`

export const BotaoLixo = styled.button`
  background: none;
  border: none;
  color: #fff; 
  font-size: 1.5em; 
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  padding: 0; 

  &:hover {
    color: #ff4d4d; 
  }
`;


