import styled from "styled-components"

const ContainerCategorias = styled.div`
    display: flex;
    flex-direction: column;
    width: 96%;
    padding: 20px 0px 0px 50px;
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

const VideoItem = styled.div`
    width: 430px;
    height: 319px;
    background-color: #444;
    border-radius: 14px;
    box-shadow:inset 0 8px 10px -4px ${props => props.color || '#000000'} ;
    border:4px solid ${props => props.color || '#000000'};

    img{
        width: 429.19px;
        height: 260.85px;
        border-radius: 12px 12px 0 0;
        border-bottom:  4px solid ${props => props.color || '#000000'};
        box-shadow:inset 0 8px 10px -2px ${props => props.color || '#000000'} ;
    }
`;

const CategoriaVideos = ({ categoria, color, videos }) => {
    return (
        <ContainerCategorias>
            <TituloCategoria color={color}>{categoria}</TituloCategoria>
            <VideosContainer>
                {videos.map(video => (
                    <VideoItem key={video.id} color={color}>
                        <img src={video.photo} alt={video.title} style={{width: '100%'}} />
                        <h3>{video.title}</h3>
                    </VideoItem>
                ))}
            </VideosContainer>
        </ContainerCategorias>
    )
}

export default CategoriaVideos;
