import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { DivCarousel } from './Styles';
import { ContainerHome } from './Styles';
import { useEffect, useState } from "react";
import api from '../../services/api/api';
import { Table } from "antd";
import { StyledTable } from './Styles';
import { useGetSessoes, useCreateSessao, useDeleteSessao } from '../../hooks/sessoes';
import { useForm } from "react-hook-form";
import { useQueryClient } from '@tanstack/react-query';
import { Button } from 'antd';
import { ButtonModal } from './Styles';
import ModalHome from './Modal';



function Home(){
   const {
    handleSubmit,
    register,
    formState: { errors },
 } = useForm({});


   const [openModal, setOpenModal] = useState(false)

    const { data: sessoes, isLoading } = useGetSessoes({});
    const [usuarios, setUsuarios] = useState([]);
    const [carregando, setCarregando] = useState(false);
    //onSubmit
    function response(data) {

    }

const columns = [
  {
    title: 'MEMBRO',
    dataIndex: 'sessoes.id_usuario',
    key: 'sessoes',
  },
  {
    title: 'CHEGADA',
    dataIndex: 'sessoes.timestamps',
    key: 'sessoes',
  },
  {
    title: 'TEMPO',
    dataIndex: 'sessoes.timestamps',
    key: 'sessoes',
  },

];

    const getUsuarios = async () => {
         try{
      setCarregando(true);
      const res = await api.get("/usuarios");
      setUsuarios(res.data);


    } catch (erro) {
     console.error(erro);
     alert(erro.response.data.message);

    } finally {
      setCarregando(false);
    }

    };

    useEffect(() => {
        getUsuarios();
    }, [])

    if (carregando)
       return (
       <ContainerHome>
         <h1>Carregando...</h1>
      </ContainerHome>
      );


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

    
             <StyledTable dataSource={sessoes} columns={columns}>

             {isLoading ? ( 
             <p>carregando</p>
            ):(
              sessoes.map((sessoes) => {
                return <div>{sessoes?.timestamps}</div>
              })
               )}

               </StyledTable>
             
              </ContainerHome>


        </div>
    )
}

export default Home