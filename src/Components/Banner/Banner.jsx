import styled from "styled-components"

const Banner = ()=>{

    const BannerContainer = styled.div`
        width:100%;
        background-image: linear-gradient(rgba(0, 18, 51, 0.5), rgba(0, 18, 51, 0.5)) ,url("public/img/BannerFondo.svg");
        box-shadow:  inset 0 0 11px 3px #2271D1; /* sombra azul interna */
        background-repeat: no-repeat;
        background-size:contain;
        background-position: center;
        background-color: #001233;
        height:832px;
        color: white;
    `

    return(
        <BannerContainer> 
            
            
        
        </BannerContainer>
    )
}

export default Banner