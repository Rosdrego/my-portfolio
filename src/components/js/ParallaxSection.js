// src/components/ParallaxSection.js
import React from 'react';
import { Parallax } from 'react-parallax';
import '../css/ParallaxSection.css';

const ParallaxSection = () => {
  return (
    <div>
      <Parallax bgImage="https://imgur.com/oMdUXj1" strength={500}>
        <div className="parallax-content">
          <h2>Explore Mais Projetos</h2>
          <p>Descubra os projetos incríveis que desenvolvi e as habilidades que adquiri ao longo do tempo!</p>
          <button className="explore-button">Saiba Mais</button>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxSection;
