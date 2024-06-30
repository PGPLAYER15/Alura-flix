import styled from "styled-components"
import { MdDeleteForever ,MdEdit} from "react-icons/md";

const ContainerCategorias = styled.div`
    display: flex;
    flex-direction: column;
    width: 96%;
    height: fit-content; 
    padding: 20px 0px 20px 50px;
    min-height: min-content; 
    
`;

const TituloCategoria = styled.h2`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    height: 70px;
    width: 472px;
    padding: 5px 30px;
    background-color: ${props => props.color};
    color: #FFFFFF;
    border-radius: 12px;
`;

const VideosContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
`;

const ContenedorEditVideo = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items:center;
`

const VideoItem = styled.div`
    width: 430px;
    height: 319px;
    background-color: #444;
    border-radius: 14px;
    color:white;
    border:4px solid ${props => props.color || '#000000'};

    img{
        width: 429.19px;
        height: 260.85px;
        border-radius: 12px 12px 0 0;
        border-bottom:  4px solid ${props => props.color || '#000000'};
        box-shadow:inset 0px 0px 33px 1px  ${props => props.color || '#000000'} ;
    }
`;

const CategoriaVideos = ({ categoria, color, videos }) => {
    return (
        <ContainerCategorias>
            <TituloCategoria color={color}>{categoria}</TituloCategoria>
            <VideosContainer>
                {videos.map(video => (
                    <VideoItem key={video.id} color={color} style={{background:"#000000"}}>
                        <img src={video.photo} alt={video.title} style={{width: '100%'}} />
                        <ContenedorEditVideo>
                            <div style={{display:"flex" , gap:"4px"}}>
                                <MdDeleteForever style={{width:"40px" , height:"50px"}}/>
                                <p style={{width:"40px"}}>  BORRAR </p>
                            </div>
                                
                            <div style={{display:"flex", gap:"4px" }}>
                                <MdEdit style={{width:"35px" , height:"45px"}} />
                                <p style={{width:"40px"}}>  EDITAR </p>
                            </div>
                            
                        </ContenedorEditVideo>
                    </VideoItem>
                ))}
            </VideosContainer>
        </ContainerCategorias>
    )
}

export default CategoriaVideos;
