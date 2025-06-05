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
                 <img src="data:image/png;base64,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" alt="Logo" />
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