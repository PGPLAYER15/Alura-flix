import { useEffect } from "react";
import styled from "styled-components";
import Normalize from "../Components/Normalize";
import Header from "../Components/Header";
import Footer from "../Components/FooterPage";

const FondoColor = styled.div`
    background-color: #040910;
    width: 100%;
    min-height: 100vh;
    
`

const ContainerForm = styled.div`
    width:100%;
    background-color: #262626;
    width: 100%;
    min-height: 100vh;
    box-shadow:inset 0 10px 11px -4px #2271D1 ;
    
`

const Formulario = () => {
    useEffect(() => {
        console.log("Componente Formulario renderizado");
    }, []);

    return (
        <>
            <Normalize/>
                <FondoColor>
                    <Header/>
                    <ContainerForm/>
                    <Footer/>
                </FondoColor>
        </>
        
       
    )
}

export default Formulario