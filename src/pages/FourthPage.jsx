import React from 'react';
import '../styles/FirstPage.css'; 

import chicken from '../assets/chicken.jpg';
import healthy from '../assets/healthy.jpg';
import quick from '../assets/quick.jpg';
import salad from '../assets/salad.jpg';

const FourthPage = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>
          All in<span className="highlight"> one place.</span>
        </h1>
      </div>

      <div className="recipe-grid">
        <div className="recipe-card">
          <img src={quick} alt="Quicky" />
          <div className="label">Quicky</div>
        </div>
        <div className="recipe-card">
          <img src={chicken} alt="Popular" />
          <div className="label">Popular</div>
        </div>
        <div className="recipe-card">
          <img src={salad} alt="SALAD" />
          <div className="label">SALAD</div>
        </div>
        <div className="recipe-card">
          <img src={healthy} alt="Healthy" />
          <div className="label">Healthy</div>
        </div>
      </div>
    </div>
  );
};

export default FourthPage;