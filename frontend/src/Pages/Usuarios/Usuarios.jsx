import { InputUsuarios } from "./Styles";
import { ContainerInput } from "./Styles";
import { StyledText } from "./Styles";
import { StyledTable } from "./Styles";

export default function Usuarios () {
     const dataSource = [
         {
    key: '1',
    nome: 'pedro',
    cargo: 'consultor',
    usuario: 'Administrador',
  },
  {
    key: '2',
    nome: 'ana',
    cargo: 'dev',
    usuario: 'Administrador',
  },
  
];

const columns = [
  {
    title: 'NOME',
    dataIndex: 'nome',
    key: 'usuarios',
  },
  {
    title: 'CARGO',
    dataIndex: 'cargo',
    key: 'usuarios',
  },
  {
    title: 'USUÁRIO',
    dataIndex: 'usuario',
    key: 'usuarios',
  },

];

    return (
        <div>

         <StyledText>GERENCIAR USUÁRIOS</StyledText>

        <ContainerInput>
    <InputUsuarios type= "text" placeholder= "Pesquisar usuários">
    </InputUsuarios>
        
          </ContainerInput>
<StyledTable dataSource={dataSource} columns={columns}>

</StyledTable>

          </div>
)
}