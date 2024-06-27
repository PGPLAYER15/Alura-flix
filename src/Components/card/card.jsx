import styled from 'styled-components';
import { FaRegTrashAlt,FaEdit  } from "react-icons/fa";
import PropTypes from 'prop-types';

const CardWrapper = styled.div`
    width: 26.875rem;
    height: 20rem;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    --primary-color: ${props => props.primaryColor};

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const CardHeader = styled.figure`
    width: clamp(95%, 18vw, 340px);
    height: clamp(95%, 30vw, 250px); 
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    border: 4px solid var(--primary-color);
    box-shadow: 8px 5px 15px -8px var(--primary-color);
    transition: box-shadow 0.3s ease;
    border-radius: 20px;

    &:hover {
        box-shadow: 0 -3px 15px 0px var(--primary-color);
    }
`;

const CardImage = styled.img`
    aspect-ratio: auto;
    width: 100%;
    height: 100%;
    box-shadow: 0 -10px 15px 0 var(--primary-color);
    object-fit: cover;
    border-radius: 20px 20px 0 0;
`;

const CardIcons = styled.figcaption`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1rem;
    margin-top: 4px;
    height: 3.688rem;
    margin: 0;
    padding: 0;
    border-radius: 0 0 20px 20px;
    border-top: 4px solid var(--primary-color);
    box-shadow: 0 -5px 13px 0px var(--primary-color);
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    width: 6.839rem;
    color: var(--color-white);

    &:hover {
        color: ${props => props.isDelete ? 'var(--color-error)' : 'var(--color-brillo)'};
    }
`;

const Icon = styled.span`
    font-size: 1.5rem;
    cursor: pointer;
    background-color: transparent;
`;

const IconText = styled.span`
    margin-left: 5px;
    background-color: transparent;
`;

const Card = ({ datos, primaryColor, onClick, onDelete, onEdit }) => {
    const { title, photo } = datos;

    const handleClick = () => {
        onClick();
        const bannerElement = document.getElementById('banner');
        if (bannerElement) {
            bannerElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <CardWrapper primaryColor={primaryColor}>
            <CardHeader>
                <CardImage src={photo} alt={title} onClick={handleClick} />
                <CardIcons>
                    <IconWrapper isDelete onClick={(e) => { e.stopPropagation(); onDelete(); }}>
                        <Icon as={FaRegTrashAlt} />
                        <IconText>BORRAR</IconText>
                    </IconWrapper>
                    <IconWrapper onClick={(e) => { e.stopPropagation(); onEdit(datos); }}>
                        <Icon as={FaEdit} />
                        <IconText>EDITAR</IconText>
                    </IconWrapper>
                </CardIcons>
            </CardHeader>
        </CardWrapper>
    );
};

Card.propTypes = {
    primaryColor: PropTypes.string.isRequired,
    datos: PropTypes.shape({
        photo: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default Card;