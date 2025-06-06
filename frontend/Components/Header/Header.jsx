import { DivColuna5 } from "./Styles";
import { ContainerH } from "./Styles";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Styles";
import { TextoHeader } from "./Styles";
import { LinkHeader } from "./Styles";
import useAuthStore from "../../src/stores/auth";
import Home from "../../src/Pages/Home/Home";
import Perfil from "../../src/Pages/Perfil";

export default function Header() {
    const usuario = useAuthStore((state) => state.usuario);
    const location = useLocation();
    const isHome = location.pathname === "/";
    const isPerfil = location.pathname === "/perfil";
    const isUsuarios = location.pathname === "/usuario";

    
    return <h3>
        <ContainerH>
        <DivColuna5>

            <Logo>
                 <img src="https://ponto.cpejr.com.br/static/media/logoCPE.08bb49af.png" alt="Logo" />
            </Logo> 
       {isHome && (
        <>
       <TextoHeader>
          <LinkHeader to= "/">  HOME </LinkHeader>
          
          <LinkHeader to= "/perfil">  PERFIL  </LinkHeader>
           <LinkHeader to= "/usuario">  USUÁRIOS  </LinkHeader>
         </TextoHeader>
          
        </>
        )}

        {isPerfil && (
        <>
       <TextoHeader>
          <LinkHeader to= "/">  HOME </LinkHeader>
          
          <LinkHeader to= "/perfil">  PERFIL  </LinkHeader>
           <LinkHeader to= "/usuario">  USUÁRIOS  </LinkHeader>
         </TextoHeader>
          
        </>
        )}
      
      {isUsuarios && (
        <>
       <TextoHeader>
          <LinkHeader to= "/">  HOME </LinkHeader>
          
          <LinkHeader to= "/perfil">  PERFIL  </LinkHeader>
           <LinkHeader to= "/usuario">  USUÁRIOS  </LinkHeader>
         </TextoHeader>
          
        </>
        )}

        </DivColuna5>
        </ContainerH>

    </h3>;
}