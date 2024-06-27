import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../card/card';
/* import Notification from '../notification/Notification';
import ConfirmationDialog from '../confirmationDialog/ConfirmationDialog'; */

const CategorySection = styled.section`
    width: 100%;
    padding: 0.5rem 0;
    box-sizing: border-box;
    text-align: center;
    font-size: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const CategoryTitle = styled.h3`
    color: var(--color-white);
    font-weight: bold;
    margin-top: 3.5rem;
    border-radius: 15px;
    width: clamp(17.875rem, 30vw, 27rem);
    height: 4.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: clamp(1.25rem, 2.4vw, 2rem);
    background-color: ${props => props.backgroundColor};
`;

const CardContainer = styled.div`
    width: 100%;
    display: flex;
    overflow-x: auto;
    padding: 1rem;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    margin: 0 0.5rem;
    background-color: transparent;

    &::-webkit-scrollbar {
        height: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--color-blue-light);
        border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
        background-color: var(--color-dark-gray-border);
        margin: 0 1.8rem;
    }

    @media (max-width: 768px) {
        &::-webkit-scrollbar-track {
            margin: 0 1rem;
        }
    }
`;

const Category = ({ datos, cards, onCardClick, onCardDelete, onCardEdit }) => {
    const { primaryColor, name } = datos;
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [cardToDelete, setCardToDelete] = useState(null);

    const handleDelete = (cardId, cardTitle) => {
        setCardToDelete({ id: cardId, title: cardTitle });
        setShowConfirmation(true);
    };

    const confirmDelete = () => {
        if (cardToDelete) {
            onCardDelete(cardToDelete.id);
            setNotificationMessage(`"${cardToDelete.title}" eliminado correctamente.`);
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
                setNotificationMessage('');
            }, 3000);
            setShowConfirmation(false);
            setCardToDelete(null);
        }
    };

    const cancelDelete = () => {
        setShowConfirmation(false);
        setCardToDelete(null);
    };

    return (
        <>
            {showNotification && <Notification message={notificationMessage} onClose={() => setShowNotification(false)} />}
            {showConfirmation && (
                <ConfirmationDialog 
                    message={`¿Estás seguro de que deseas eliminar "${cardToDelete?.title}" ?`}
                    title={cardToDelete?.title}
                    primaryColor={primaryColor}
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                />
            )}
            {cards && cards.length > 0 && (
                <CategorySection>
                    <CategoryTitle backgroundColor={primaryColor}>{name}</CategoryTitle>
                    <CardContainer>
                        {cards.map((card) => (
                            <Card 
                                datos={card} 
                                key={card.id}
                                primaryColor={primaryColor}
                                onClick={() => onCardClick(card)}
                                onDelete={() => handleDelete(card.id, card.title)}
                                onEdit={() => onCardEdit(card)}
                            />
                        ))}
                    </CardContainer>
                </CategorySection>
            )}
        </>
    );
};

Category.propTypes = {
    datos: PropTypes.shape({
        name: PropTypes.string.isRequired,
        primaryColor: PropTypes.string.isRequired,
    }).isRequired,
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            photo: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
    onCardClick: PropTypes.func.isRequired,
    onCardDelete: PropTypes.func.isRequired,
    onCardEdit: PropTypes.func.isRequired,
};

export default Category;