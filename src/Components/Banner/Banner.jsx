import styled from "styled-components"
import BannerFondo from "../../../public/img/BannerFondo.svg"

const Banner = ()=>{

    const BannerContainer = styled.div`
        position:relative;
        width:100%;
        height:90vh;
    `

    const BannerImg = styled.div`
        position:relative;
        background-image: linear-gradient(rgba(0, 18, 51, 0.5), rgba(0, 18, 51, 0.5)) ,url(${BannerFondo});
        box-shadow:inset 0 8px 10px -4px #2271D1 ;
        border-top: 1px #2271D1 solid;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        height:80vh;
        align-items:center;
        
    `

    const BannerContent = styled.div`
        display:flex;
        /* margin:10% 0; */
        width:100%;
        height:100%;
        color:white;
        justify-content: space-around;
        align-items: center;
        padding: 0 20px;
        
    `

    const InfoCard = styled.div`
        display: flex;
        flex-direction: column;
        width: 40%;
        
        /* background-color:white; */

        h2{
            width: 190px;
            text-align:center;
            background-color:#6BD1FF ;
            font-size: 40px;
            padding:20px;
            border-radius: 10px;
            margin: 0;
        }

        h3{
            display:block;
            font-size: 40px;
            font-weight: 300;
            margin: 40px 0 5px 0;
        }

        p{
            text-align: justify
        }
    `

    

    const BannerCard = styled.div`
        background:none;
        width:40%;
        height:254px;
    `

    const ImgCard = styled.img`
        border-radius: 17px;
    `

    return(
        <BannerContainer> 

            <BannerImg>
                <BannerContent>
                        <InfoCard> 

                            <h2> Front-End </h2> 
                            <h3> Challenge React </h3>
                            <p>
                                Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
                            </p>
                        
                        </InfoCard>
                        <BannerCard>
                                <ImgCard src="../../../public/img/Cardplayer.svg" alt="hola" /> 
                        </BannerCard>
                            
                        
                </BannerContent>
            </BannerImg>
            
        </BannerContainer>
    )
}

export default Banner