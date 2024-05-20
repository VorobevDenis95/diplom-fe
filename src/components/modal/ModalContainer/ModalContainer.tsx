import React from 'react';
import './ModalContainer.css';

interface ModalContainerProps {
  children: React.ReactNode;
}

const ModalContainer = ({children} : ModalContainerProps) => {
  return (
    <div className="modal">
      <div className="modal__container">
        {children}
      </div>
    </div>
  )
}

export default ModalContainer;