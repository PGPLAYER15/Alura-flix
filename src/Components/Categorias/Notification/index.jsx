import { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { BsCheckCircle } from "react-icons/bs";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const NotificationWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 1rem;
  border-radius: 10px;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.3s ease;
  z-index: 9999;
  width: clamp(350px, 100%, 400px);
  height: auto;
  color: var(--color-black);
  background-color: ${props => props.color};
  animation: ${fadeIn} 0.3s ease;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const NotificationContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const NotificationIcons = styled.div`
  background-color: transparent;
  margin: auto 0.5rem;
`;

const StyledBsCheckCircle = styled(BsCheckCircle)`
  background-color: transparent;
  font-size: 1.9rem;
  margin: 1rem 2rem 1rem 1rem;
  font-weight: bold;
  color: var(--color-backend);
`;

const NotificationText = styled.p`
  margin: 0;
  background-color: transparent;
  font-size: 1rem;
`;

const CloseButton = styled.button`
  background-color: transparent;
  color: inherit;
  border: none;
  cursor: pointer;
  font-size: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

const Notification = ({ message, onClose, color }) => {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        onClose();
    };

    return (
        <NotificationWrapper show={show} color={color}>
            <NotificationContent>
                <NotificationIcons>
                    <StyledBsCheckCircle />
                </NotificationIcons>
                <NotificationText>{message}</NotificationText>
                <CloseButton onClick={handleClose}>X</CloseButton>
            </NotificationContent>
        </NotificationWrapper>
    );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    color: PropTypes.string
};

Notification.defaultProps = {
    color: 'var(--color-white)' 
};

export default Notification;