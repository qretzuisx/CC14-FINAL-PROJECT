import React from 'react';
import rhiza from './img/rhiza.png';
const AboutMe = () => {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold text-blue-600 mb-6">About Me</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img
        src={rhiza} alt="Rhizalyn T. Espiritu" className="w-60 h-60 object-cover rounded-full mx-auto mb-2"
        />
        <p className="text-lg leading-relaxed">
          Rhizalyn T. Espiritu is a bright and motivated Second Year BS Information Technology 
          student at University of the Cordilleras, specializing in Web Technology. 
          Born and raised in Baguio City, she aims to become an industry leader creating 
          innovative digital experiences that push online boundaries.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
