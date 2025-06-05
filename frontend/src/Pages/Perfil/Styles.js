import styled from "styled-components";

export const ContainerP = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
flex-direction: column;
gap: 25px;
`

export const Dados = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
`

export const ButtonDeslogar = styled.div`
font-size: 20px;
color: #FFE712 ;
background-color: black;
font-weight: 700;
width: 130px;
height: 40px;
border-radius: 20px;
margin-bottom: 50px;
cursor: pointer;
margin-left: 50px;

`

export const ButtonEditar = styled.button`
font-size: 30px;
color: black;
background-color:#FFE712 ;
width: 150px;
height: 70px;
border-radius: 20px;
font-weight: 700;
margin-bottom: 50px;
cursor: pointer;
`

export const StyledModalInput= styled.input`
font-family: Arial, Helvetica, sans-serif;
font-weight: 500;
font-size: 15px;
color: black;
display: flex;
padding-left: 10px;
height: 30px;
margin-left: 50px;
margin-bottom: 20px;
margin-top: 30px;
border-radius: 20px;
width: 300px;
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
width: 400px;
height: 450px;
background-color: whitesmoke;
border-radius: 20px;
z-index: 1000;
position: fixed;
  top: 200px;
  left: 550px;
  z-index: 999;
 box-shadow: 0 4px 20px black;
`
export const ButtonLoginM = styled.button`
background-color: whitesmoke;
color: #FFE712;
border-color: #FFE712 ;
border-radius: 20px;
font-size: 15px;
width: 80px;
height: 30px;
font-weight: 700;
margin-left: 160px;
margin-top: 10px;
cursor: pointer;
`
export const SaidaX = styled.div`
font-size: 30px;
color: black;
padding-left: 350px;
padding-top: 10px;
font-weight: 600;
cursor: pointer;
`

export const UsuarioContainer = styled.div`
background-color: #363636;
width: 500px;
height: 250px;
border-radius: 20px;
`