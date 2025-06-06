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
                 <img src="https://media.discordapp.net/attachments/674342271147311107/1379917188474863749/4fd3f3931b40ec2bf56833299097665c7347434c.png?ex=6841fb87&is=6840aa07&hm=227dcb8ae98495432cedccce7eea62008aaab99e5c72c2f1ea202001ec893ad1&=&format=webp&quality=lossless&width=829&height=829" alt="Logo" />
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