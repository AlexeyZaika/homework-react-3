import React, { useState } from 'react';
import '../App.css';
import Table from './Table';
import Button from './Button';
import Modal from './Modal/Modal';

export const Tests = () => {
  const [modalState, setModalState] = useState(false);
  const [valueForm, setValueForm] = useState([]);
  const [valueTable, setValueTable] = useState([]);

  const showModal = () => {
    setModalState(true);
  }

  const closeModal = (e) => {
    if (!e.target.closest('.modal__body')) {
      setModalState(false);
    }
  }

  const closeModalOnSubmit = () => {
    setModalState(false);
  }

  function getValueForm(obj) {
    valueForm.push(obj);
    setValueForm(valueForm);
    setValueTable([...valueForm]);
  }

  return (
    <div className="App">
      <div className="container">
        <Table valueTable={valueTable} />
        <div className="block-button">
          <Button onClick={showModal} />
        </div>
        <Modal modalState={modalState} onClick={closeModal} onSubmit={closeModalOnSubmit} getValueForm={getValueForm} />
      </div>
    </div>
  );
}
