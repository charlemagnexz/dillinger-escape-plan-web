import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/dep-video.mp4' autoPlay loop muted />
      <h1>New Album Release</h1>
      <p>Dissociation Out Now</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;