import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TestForm } from './TestForm';

function Modal(props) {
  return (
    <ModalStyled modalState={props.modalState} onClick={props.onClick} className="modal">
      <ModalBodyStyled className="modal__body">
        <TestForm onSubmit={props.onSubmit} getValueForm={props.getValueForm} />
      </ModalBodyStyled>
    </ModalStyled>
  )
}

Modal.propTypes = {
  modalState: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  getValueForm: PropTypes.func.isRequired,
}

const ModalStyled = styled.div`
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease 0s;
  opacity: ${props => props.modalState ? 1 : 0};
  visibility: ${props => props.modalState ? 'visible' : 'hidden'};
`;

const ModalBodyStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
`;

export default Modal;

