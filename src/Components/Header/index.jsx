import styled from "styled-components"

import { useNavigate } from 'react-router-dom';


const HeaderStyle = styled.header`
    display: flex;
    padding: 30px 30px;
    color: white;
    justify-content: space-between;
`

const BtnInicioNuevoVideo = styled.button`
    display: flex;
    width: 180px;
    height: 54px;
    color: white;
    background-color:#262626;
    border:2px #F5F5F5 solid;
    border-radius: 10px;
    cursor:pointer;
    font-size:22px;
    align-items: center;
    justify-content: center;
    transition: background,box-shadow,color,border 0.5s ease-out; /* transición para el efecto de hover */
    
    &:hover{
        box-shadow: inset 0 0 11px 3px #2271D1; /* sombra azul interna */
        background: black;
        color: #2271D1;
        border:2px #2271D1 solid;
    }
`


const BtnContainer = styled.div`
    display:flex;
    gap: 20px;
`

const Header = (props) =>{

    const navigate = useNavigate();

    const cambiarPaginaVideo = () => {
        navigate('/Formulario');  // Asegúrate de que esta ruta coincida con la que definiste en App.jsx
    }

    const irAHome = () => {
        navigate('/');
    }


    return(
        <HeaderStyle style={{background:`${props.fondo}`}}>
            <img src="./img/LogoMain.svg" alt="Logo Main" />
            <BtnContainer>
                <BtnInicioNuevoVideo onClick={()=>{irAHome()}}> Home </BtnInicioNuevoVideo>
                <BtnInicioNuevoVideo onClick={()=>{cambiarPaginaVideo()}}> Nuevo video </BtnInicioNuevoVideo>
            </BtnContainer>
            
        </HeaderStyle>
    )
    
}

export default Header