import React from 'react';
import BannerImage from '../../assets/banner.jpg';
import Button from '../shared/Button';

function HeroSection() {
  return (
    <section
      className="h-[75vh] w-full flex justify-center items-center "
      style={{
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.6), 
          rgba(0, 0, 0, 0.3)
        ), url(${BannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-white px-4">
        <h1 className="text-6xl mb-5">Unlock your learning potential</h1>
        <p className="text-2xl mb-14 max-w-[600px]">
          Choose from thousands of courses and a vast collection of study
          materials to fuel your educational journey
        </p>
        <Button buttonType="bannerButton">Explore</Button>
      </div>
    </section>
  );
}

export default HeroSection;
