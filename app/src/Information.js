import React from 'react';
import './Information.css'; // Assuming you have a CSS file for styling
import ButtonMeanings from './ButtonMeanings';

const Information = ({ setModalOpen }) => {
  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <div className="top">
            <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
            <h2>Welcome to GREEN<span className="Quest">QUEST</span>!</h2>
          </div>
          <p>
            Our platform is a dynamic tool designed to inspire and track sustainability practices on campus. 
            As you navigate through, you'll notice various sustainable activities, each tagged with a point value. 
            Wondering what these points mean? Every activity you engage in adds to your personal score, shown at the heart 
            of the Earth graphic. This not only reflects your positive environmental impact but also motivates a campus-wide shift 
            towards eco-friendly habits.
            <br />
            <br />
            From simple actions to community-driven initiatives, 
            each task corresponds with the university's key resource stewardship goals. Our mission? To make sustainability both a communal goal 
            and an interactive challenge. Dive in, earn points, and witness firsthand how your conscious choices contribute to a greener 
            future for our campus. Welcome to the sustainability revolution!
          </p>
          <ButtonMeanings />
        </div>
      </div>
    </div>
  );
};

export default Information;

