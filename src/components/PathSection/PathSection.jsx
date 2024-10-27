import React from 'react';
import Button from '../shared/Button';
import Laptop from '../../assets/laptop.png';

function PathSection() {
  return (
    <section className="bg-orange-600 py-10">
      <div className="container-xl mx-auto px-4 flex flex-col items-center md:flex-row md:justify-center">
        <div className="flex flex-col items-center space-y-8 mb-8 md:mb-0">
          <header className="text-center text-white">
            <h2 className="text-4xl font-bold">
              Your pathway to smarter learning
            </h2>
            <p className="md:text-center">
              Engage, learn, and grow with our AI Tutor powered by GPT-4, “Edi”
            </p>
          </header>
          <Button>Ask Edi</Button>
        </div>
        <img src={Laptop} alt="laptop" className="w-96 hidden md:block" />
      </div>
    </section>
  );
}

export default PathSection;
