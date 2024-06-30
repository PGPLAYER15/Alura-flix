import styled from "styled-components"

const FooterContainer = styled.div`
    background-color: #040910;
    width: 100%;
    height: 125px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top:2px solid #2271D1;
    box-shadow:0px -5px 16px 0px  #2271D1 ;
    
`   
const Footer =() => {
    
    return(
        <FooterContainer>
            <img src="./img/LogoMain.svg" alt="IMAGEN" />
        </FooterContainer>
    )
    
}

export default Footer