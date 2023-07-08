import React from 'react';
import heroImg01 from '../assets/images/hero-img.jpg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="left-content">
          <h1>Discover healing,<br/> embrace therapy's power.</h1>
          <p>Embrace therapy's transformative power. Explore, heal, 
            and grow in a safe environment. Overcome challenges, 
            discover yourself, and embrace a happier, healthier life. 
            Take the first step today.</p>
            <button className='button'> Learn More</button>
        </div>
        <div className="right-content">
          <img src={heroImg01} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
