import React from 'react';
import ProjectCreator from './components/ProjectCreator';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Launch() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <ProjectCreator />
      </main>
      
      <Footer />
    </div>
  );
}

export default Launch;
