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
        <div className="modal2">
          <div className="modal-content2">
            <div className="top">
                <span className="close" onClick={handleCloseModal}>&times;</span>
                <div class="description">
                    <h2>Leave No Trace Principles</h2>
                    <p>This button promotes the practice of minimizing your ecological footprint when participating in outdoor activities, ensuring that nature stays pristine for everyone.</p>
                </div>

                <div class="description">
                    <h2>Reuse Products</h2>
                    <p>Clicking on this encourages users to give products a second life, decreasing wasteful consumption and reducing the strain on our planet's resources.</p>
                </div>

                <div class="description">
                    <h2>Conserve Water</h2>
                    <p>This button emphasizes the importance of using water responsibly, urging users to reduce wastage and consider the broader environmental implications.</p>
                </div>

                <div class="description">
                    <h2>Recycle</h2>
                    <p>By selecting this, users are reminded of the significance of recycling, a pivotal action in minimizing landfill waste and conserving energy.</p>
                </div>

                <div class="description">
                    <h2>Consume Energy Efficient Produce</h2>
                    <p>This option advocates for the consumption of products manufactured with energy efficiency in mind, reducing greenhouse gas emissions and overall energy usage.</p>
                </div>

                <div class="description">
                    <h2>Use Efficient Appliances</h2>
                    <p>Clicking here encourages the use of energy-efficient appliances, promoting reduced energy consumption and helping in the fight against climate change.</p>
                </div>

                <div class="description">
                    <h2>Use Efficient Vehicles</h2>
                    <p>This button promotes the use of vehicles with greater fuel efficiency or alternative energy sources, aiding in the reduction of carbon emissions.</p>
                </div>

                <div class="description">
                    <h2>Volunteer</h2>
                    <p>By selecting this, users are encouraged to give their time towards environmental causes, fostering community involvement in sustainability efforts.</p>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonMeanings;
