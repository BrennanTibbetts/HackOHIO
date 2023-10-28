import React, { useState } from 'react';
import './ButtonMeanings.css';

const ButtonMeanings = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="button">
      <button onClick={handleButtonClick}>More About Each Button</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="top">
                <span className="close" onClick={handleCloseModal}>&times;</span>
                <h2>Each Button!</h2>
            </div>
            <p>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonMeanings;
