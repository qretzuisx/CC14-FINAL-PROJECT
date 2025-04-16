import React from 'react';
import w1 from './img/w1.png';
import w2 from './img/w2.png';
import w3 from './img/w3.png';
import w4 from './img/w4.png';
import w5 from './img/w5.png';

const Experience = () => {
  return (
    <section id="projects" className="py-12 bg-gray-50">
      <h2 className="text-3xl font-semibold text-blue-600 mb-6">Experiences</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        
        <div className="relative overflow-hidden rounded-lg shadow-lg group">
          <a href="projects/TributePage/index.html" target="_blank" rel="noopener noreferrer">
            <img src={w1} alt="Tribute Page" className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center text-white px-4 py-2">
                <p className="font-semibold text-xl">Tribute Page</p>
                <p>A responsive tribute page dedicated to a notable person, showcasing their achievements and contributions.</p>
              </div>
            </div>
          </a>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg group">
          <a href="projects/SurveyForm/index.html" target="_blank" rel="noopener noreferrer">
            <img src={w3} alt="Survey Form" className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center text-white px-4 py-2">
                <p className="font-semibold text-xl">Survey Form</p>
                <p>A user-friendly survey form designed to collect feedback from users.</p>
              </div>
            </div>
          </a>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg group">
          <a href="projects/ProductLandingPage/index.html" target="_blank" rel="noopener noreferrer">
            <img src={w4} alt="Product Landing Page" className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center text-white px-4 py-2">
                <p className="font-semibold text-xl">Product Landing Page</p>
                <p>A promotional landing page for a product, featuring visually appealing design elements and clear calls to action.</p>
              </div>
            </div>
          </a>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg group">
          <a href="projects/TechnicalDocumentation/index.html" target="_blank" rel="noopener noreferrer">
            <img src={w2} alt="Technical Documentation Page" className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center text-white px-4 py-2">
                <p className="font-semibold text-xl">Technical Documentation Page</p>
                <p>A comprehensive documentation page providing detailed information about a specific topic or tool.</p>
              </div>
            </div>
          </a>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg group">
          <a href="projects/Rhizalyn Website/index.html" target="_blank" rel="noopener noreferrer">
            <img src={w5} alt="Personal Webpage" className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center text-white px-4 py-2">
                <p className="font-semibold text-xl">Personal Webpage</p>
                <p>A personal site I designed to showcase my training at TESDA.</p>
              </div>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Experience;
