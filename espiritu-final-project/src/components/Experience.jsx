import React from 'react';
import w1 from './img/w1.png';
import w2 from './img/w2.png';
import w3 from './img/w3.png';
import w4 from './img/w4.png';
import w5 from './img/w5.png';

const Experience = () => {
  return (
    <section id="projects" className="py-12 bg-gray-50">
      {/* Title with Gradient Text */}
      <h2 className="text-3xl font-semibold text-transparent bg-gradient-to-br from-purple-600 to-blue-500 bg-clip-text mb-6">
        Experiences
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        
        {/* Repeatable Project Card */}
        {[{
          img: w1,
          title: 'Tribute Page',
          desc: 'A responsive tribute page dedicated to a notable person, showcasing their achievements and contributions.',
          href: 'projects/TributePage/index.html'
        }, {
          img: w3,
          title: 'Survey Form',
          desc: 'A user-friendly survey form designed to collect feedback from users.',
          href: 'projects/SurveyForm/index.html'
        }, {
          img: w4,
          title: 'Product Landing Page',
          desc: 'A promotional landing page for a product, featuring visually appealing design elements and clear calls to action.',
          href: 'projects/ProductLandingPage/index.html'
        }, {
          img: w2,
          title: 'Technical Documentation Page',
          desc: 'A comprehensive documentation page providing detailed information about a specific topic or tool.',
          href: 'projects/TechnicalDocumentation/index.html'
        }, {
          img: w5,
          title: 'Personal Webpage',
          desc: 'A personal site I designed to showcase my training at TESDA.',
          href: 'projects/Rhizalyn Website/index.html'
        }].map((project, i) => (
          <div key={i} className="relative overflow-hidden rounded-lg shadow-lg group">
            <a href={project.href} target="_blank" rel="noopener noreferrer">
              <img src={project.img} alt={project.title} className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white px-4 py-2">
                  <p className="font-semibold text-xl">{project.title}</p>
                  <p>{project.desc}</p>
                </div>
              </div>
            </a>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Experience;
