import { useState, useEffect } from "react";
import styled from "styled-components";
import Normalize from "../Components/Normalize";
import Banner from "../Components/Banner/Banner";

const FondoColor = styled.div`
    background-color: #040910;
    width: 100%;
    min-height: 100vh;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Formulario = () => {
    useEffect(() => {
        console.log("Componente Formulario renderizado");
    }, []);

    return (
        <Normalize>
            <FondoColor>
                <Banner></Banner>
            </FondoColor>
        </Normalize>
    )
}

export default Formulario