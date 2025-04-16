import React from 'react';

const Skills = () => (
  <section className="my-12">
    {/* Title with Gradient Text */}
    <h2 className="text-3xl font-semibold text-transparent bg-gradient-to-br from-purple-600 to-blue-500 bg-clip-text mb-6">
      Skills
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Technical Skills Box */}
      <div className="bg-gradient-to-br from-purple-600 to-blue-500 p-6 rounded-lg text-white">
        <h3 className="text-xl font-semibold mb-3">
          Technical Skills
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Multimedia Software: Adobe Photoshop, Figma</li>
          <li>Programming Languages: Python, Java, C#</li>
          <li>Web Development: Responsive Web Design (COC-1 Certified)</li>
        </ul>
      </div>
      
      {/* Professional Skills Box */}
      <div className="bg-gradient-to-br from-purple-600 to-blue-500 p-6 rounded-lg text-white">
        <h3 className="text-xl font-semibold mb-3">
          Professional Skills
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Strong problem-solving abilities</li>
          <li>Excellent collaboration skills</li>
          <li>Open to feedback and continuous improvement</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
