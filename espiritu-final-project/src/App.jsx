import './App.css';
import React from 'react';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900 font-sans">
      <header className="text-center py-8 bg-blue-500 text-white w-full">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
      </header>
      <main className="w-full px-8 py-6">
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;