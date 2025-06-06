import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { DivCarousel } from './Styles';
import { ContainerHome } from './Styles';
import { useEffect, useState } from "react";
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





function Home(){
   const {
    handleSubmit,
    register,
    formState: { errors },
 } = useForm({});

 const {mutate: postSessao, isPending} = useCreateSessao({});


   const [openModal, setOpenModal] = useState(false)

    const { data: sessoes, isLoading } = useGetSessoes({});
    const { data: usuarios } = useGetUsers({});
    const [ setSessoes] = useState([]);
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
    dataIndex: 'timestamps.chegada',
    key: 'chegada',
  },
  {
    title: 'TEMPO',
    dataIndex: 'timestamps.tempo',
    key: 'tempo',
  },

];



     const getSessoes = async () => {
   try{
     setCarregando(true);
      const res = await api.get("/sessoes");
     getSessoes(res.data);


    } catch (erro) {
     console.error(erro);
    alert(erro.response.data.message);

    } finally {
      setCarregando(false);
  }

  };

   useEffect(() => {
       getSessoes();
    }, [])

    if (carregando)
       return (
       <ContainerHome>
        <h1>Carregando...</h1>
      </ContainerHome>
      );

     
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

    const deletarSessao = async (id) => {
  try {
    await api.delete(`/sessoes/${id}`);
    alert("Sessão deletada com sucesso!");
    getSessoes(); // Atualiza a tabela após deletar
  } catch (erro) {
    console.error(erro);
    alert("Erro ao deletar sessão.");
  }
};

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
             dataSource={sessoes}
             columns={columns} 
             loading={isLoading} 
             >
               
            
              
              </StyledTable>

           
             
              </ContainerHome>


        </div>
    )
}

export default Home