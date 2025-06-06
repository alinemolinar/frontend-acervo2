import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { DivCarousel } from './Styles';
import { ContainerHome } from './Styles';
import { useEffect, useState, useMemo } from "react";
import api from '../../services/api/api';
import { Table } from "antd";
import { StyledTable } from './Styles';
import { useGetSessoes, useCreateSessao, useDeleteSessao } from '../../hooks/sessoes';
import { useGetUsers } from '../../hooks/user';
import useAuthStore from '../../stores/auth';
import { useQueryClient } from '@tanstack/react-query';
import { ButtonModal } from './Styles';
import ModalHome from './Modal';
import { useForm } from 'react-hook-form';
import { BotaoLixo } from './Styles';





function Home(){
   const {
    handleSubmit,
    register,
    formState: { errors },
 } = useForm({});

 const {mutate: postSessao, isPending} = useCreateSessao({});
 const { mutate: deleteSessao, isPending: isDeletingSessao } = useDeleteSessao();

     const { data: sessoes, isLoading: isLoadingSessoes, error: errorSessoes } = useGetSessoes();
    const { data: usuarios, isLoading: isLoadingUsuarios, error: errorUsuarios } = useGetUsers();


   const [openModal, setOpenModal] = useState(false)

    //const { data: sessoes, isLoading } = useGetSessoes({});
   // const { data: usuarios } = useGetUsers({});
   // const [ setSessoes] = useState([]);
    const [carregando, setCarregando] = useState(false);
    //onSubmit
    function response(data) {

    }

const columns = [
  {
    title: 'MEMBRO',
    dataIndex: 'id_usuario',
    key: 'id_usuario',
  
  },
  {
    title: 'CHEGADA',
    dataIndex: ['timestamps', 'chegada'],
    key: 'chegada',
  },
  {
    title: 'TEMPO',
    dataIndex: ['timestamps', 'tempo'],
    key: 'tempo',
  },
   {
            title: '', // Coluna para o botão de lixeira
            key: 'action',
            render: (text, record) => (
                <BotaoLixo
                    onClick={() => handleDeleteSessao(record.id)}
                    disabled={isDeletingSessao} // Desabilita enquanto deleta
                >
                    🗑️
                </BotaoLixo>
            ),
            width: '50px', // Largura para a coluna do botão
        },

];



    // const getSessoes = async () => {
   //try{
    // setCarregando(true);
   //   const res = await api.get("/sessoes");
    // getSessoes(res.data);


  //  } catch (erro) {
   //  console.error(erro);
   // alert(erro.response.data.message);
//
  //  } finally {
  //    setCarregando(false);
 // }

 // };
//
  // useEffect(() => {
  //     getSessoes();
  //  }, [])

  //  if (carregando)
  //     return (
   //   <ContainerHome>
    //    <h1>Carregando...</h1>
    //  </ContainerHome>
    //  );

     
  //  const getUsuarios = async () => {
    //     try{
    //  setCarregando(true);
    //  const res = await api.get("/usuarios");
    //  setUsuarios(res.data);

//
    //} catch (erro) {
    // console.error(erro);
   //  alert(erro.response.data.message);

    //} finally {
    ////  setCarregando(false);
    ///}

   // };

    //useEffect(() => {
     //   getUsuarios();
   ///}, [])

 ////   if (carregando)
   //    return (
   //   <ContainerHome>
   //      <h1>Carregando...</h1>
    //  </ContainerHome>
    //  );

 const dataSource = useMemo(() => {
    if (!sessoes || !usuarios) return [];

        return sessoes.map(sessao => {
            const usuarioAssociado = usuarios.find(user => user.id === sessao.id_usuario);
            return {
                key: sessao.id, // O Ant Design Table precisa de uma 'key' única para cada linha
                ...sessao,
                nomeUsuario: usuarioAssociado ? usuarioAssociado.nome : 'Desconhecido',
                cargoUsuario: usuarioAssociado ? usuarioAssociado.cargo : '', // Supondo que o usuário tenha um campo 'cargo'
            };
        });
    }, [sessoes, usuarios]);

    const handleDeleteSessao = async (id) => {
        if (window.confirm("Tem certeza que deseja deletar esta sessão?")) {
            try {
                await deleteSessao(id, {
                    onSuccess: () => {
                        alert("Sessão deletada com sucesso!");
                        queryClient.invalidateQueries(['sessoes']); 
                    },
                    onError: (err) => {
                        console.error("Erro ao deletar sessão:", err);
                        alert(`Erro ao deletar sessão: ${err.message || 'Erro desconhecido'}`);
                    }
                });
            } catch (err) {
                console.error("Erro na exclusão (fora do hook):", err);
            }
        }
    };

    if (isLoadingSessoes || isLoadingUsuarios || isDeletingSessao) {
        return (
            <ContainerHome>
                <h1>Carregando dados...</h1>
            </ContainerHome>
        );
    }
     if (errorSessoes || errorUsuarios) {
        return (
            <ContainerHome>
                <h1>Erro ao carregar dados: {errorSessoes?.message || errorUsuarios?.message || 'Erro desconhecido'}</h1>
            </ContainerHome>
        );
    }
    console.log(sessoes);

    return(
        <div>

            <ContainerHome>  
             <DivCarousel>
            <Carousel
            infiniteLoop = {true}
            showThumbs = {false}
            showStatus = {false}
            >
                <div>
                    <img src="https://wallpapersok.com/images/hd/red-tulip-in-yellow-flower-garden-bqstch8ds50d2s5a.jpg" 
                    height= "300px" />
                </div>
                <div>
                    <img src="https://images6.alphacoders.com/835/835213.jpg"
                    height= "300px"  />
                </div>
                <div>
                    <img src= "https://www.hdwallpapers.in/download/yellow_flowers_field_green_grass_during_daytime_4k_hd_flowers-HD.jpg" 
                    height= "300px" />
                </div>


            </Carousel>
             </DivCarousel>

            


             <ButtonModal onClick={() => setOpenModal(true)}>
                         Fazer Login
            </ButtonModal>

            
             <ModalHome isOpen = {openModal} setModalOpen={() => setOpenModal(!openModal)}>

             </ModalHome>

             <StyledTable 
             dataSource={dataSource}
             columns={columns} 
             pagination={false} 
             >
               
            
              
              </StyledTable>

           
             
              </ContainerHome>


        </div>
    )
}

export default Home