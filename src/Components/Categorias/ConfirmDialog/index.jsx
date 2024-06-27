import PropTypes from 'prop-types';
import styled from 'styled-components';

const DialogContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-white);
  padding: 1rem;
  border-radius: 12px;
  z-index: 10000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: clamp(100px, 400vw, 400px);

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const MessageParagraph = styled.p`
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  background-color: var(--color-white);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const DialogTitle = styled.span`
  margin-top: 0.5rem;
  font-size: 1rem;
  background-color: var(--color-white);
  color: ${props => props.primaryColor};
`;

const Button = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
`;

const ConfirmButton = styled(Button)`
  background-color: var(--color-blue);
  color: var(--color-white);
  border: 1px solid var(--color-blue);

  &:hover {
    background-color: var(--color-gray-light);
    color: var(--color-blue);
  }
`;

const CancelButton = styled(Button)`
  background-color: var(--color-white);
  color: var(--color-light-gray);
  border: 1px solid var(--color-blue);

  &:hover {
    background-color: var(--color-gray-light);
    color: var(--color-blue);
  }
`;

const ConfirmationDialog = ({ message, primaryColor, onConfirm, onCancel }) => {
  return (
    <DialogContainer>
      <MessageParagraph>
        {message}
        <DialogTitle primaryColor={primaryColor}></DialogTitle>
      </MessageParagraph>
      <ConfirmButton onClick={onConfirm}>Sí</ConfirmButton>
      <CancelButton onClick={onCancel}>No</CancelButton>
    </DialogContainer>
  );
};

ConfirmationDialog.propTypes = {
  message: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ConfirmationDialog;