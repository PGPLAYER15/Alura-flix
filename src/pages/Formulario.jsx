import { useEffect } from "react";
import styled from "styled-components";
import Normalize from "../Components/Normalize";
import Header from "../Components/Header";
import Footer from "../Components/FooterPage";

const FondoColor = styled.div`
    background-color: #191919;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`
const Container = styled.div`
    width:100%;
    background-color: #191919;
    width: 100%;
    height: 110vh;
    box-shadow:inset 0 10px 11px -4px #2271D1 ;
    
`

const TituloEstilizado = styled.h1`
    text-align:center;
    font-size: 60px;
    color:white;
    margin-top:70px;
`

const ParrafoEstilizado = styled.p`
    text-align:center;
    font-size: 30px;
    color:white;
    
`
const CrearCardParrafo = styled.p`
    font-size:40px;
    color:white;
    position:relative;
    /* left:20px; */
`
const ContainerForm = styled.div`
    margin: 90px 188px;
`


const Formulario = () => {
    useEffect(() => {
        console.log("Componente Formulario renderizado");
    }, []);

    return (
        <>
            <Normalize/>
                <FondoColor>
                    <Header fondo={"#040910"}/>
                    <Container>

                    <TituloEstilizado> NUEVO VIDEO</TituloEstilizado>
                    <ParrafoEstilizado> Complete el formulario para crear una nueva tarjeta de video </ParrafoEstilizado>

                    <ContainerForm>
                        <CrearCardParrafo> Crear Card </CrearCardParrafo>
                    </ContainerForm>
                    
                    </Container>
                    <Footer/>
                </FondoColor>
        </>
        
       
    )
}

export default Formulario