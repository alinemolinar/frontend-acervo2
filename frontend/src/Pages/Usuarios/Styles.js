import styled from "styled-components";
import { Table } from "antd";


export const InputUsuarios = styled.input`
width: 800px;
height: 55px;
background-color: whitesmoke;
margin-top: 70px;
border-radius: 30px;
font-size: 20px;
padding-left: 30px;
font-weight: 500;
cursor: pointer;
`

export const ContainerInput = styled.div`
display: flex;
justify-content: center;

`
export const StyledText = styled.div`
color: #FFE712;
font-size: 35px;
padding-left: 400px;
margin-top: 50px;
margin-left: 150px;
font-weight: 600;
`

export const StyledTable = styled(Table)`
margin-top: 50px;
width: 1100px;
margin-left: 200px;
font-weight: 600;
font-family: Arial, Helvetica, sans-serif;
background-color: black;
gap: 20px;


  .ant-table-container {
    background-color: #363636;
    font-size: 20px;
    color: #FFE712;
  }
   .ant-table-thead > tr > th {
    background-color:#363636;
    padding-left: 20px;
    font-weight: 500;
    color:white;
    font-size: 25px;
    
  }
`
