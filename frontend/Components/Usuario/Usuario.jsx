import { ContainerU, Nome, Dados, Dado, Valor } from "./Styles";


export default function Usuario ({ usuario }) {
    return (
         <ContainerU>
                <Nome>Perfil</Nome>
                <Dados>
                    <Dado>
                        Nome: <Valor>{usuario.nome}</Valor>
                    </Dado>
                    <Dado>
                        Email: <Valor>{usuario.email}</Valor>
                    </Dado>
                    <Dado>
                        Cargo: <Valor>{usuario.cargo}</Valor>
                    </Dado>
                    <Dado>
                        Status: <Valor>{usuario.status}</Valor>
                    </Dado>
                </Dados>
            </ContainerU>
        

    );
}