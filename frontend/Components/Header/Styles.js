import { Link } from "react-router-dom";
import styled from "styled-components";

export const DivColuna5 = styled.div`
width: 100%;
height: 120px;
box-sizing: border-box;
background-color: #FFE712 ;
color: black;
font-size: 20px;
font-style: normal;
display: flex;
padding-left: 20px;
padding-right: 20px;
`
export const ContainerH = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
`

export const TextoHeader = styled.nav`
  display: flex;
  gap: 9rem;
  margin-left: 300px;
  margin-top: 40px;

`
export const LinkHeader = styled(Link)`
  color: black;
  font-weight: 700;
  font-size: 2.5rem;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;


  &:hover {
    text-decoration: underline;
  }
`

export const Logo = styled.div`
display: flex;
  align-items: center;
  font-weight: bold;

  color: black;

  img {
    width: 200px;
    margin-right: 10px;
  }
`



