import React from 'react';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold">Hello, I am Renan S. Pires</h1>
          <p className="text-lg md:text-xl mt-4">Fullstack Developer & Data Scientist</p>
          <p className="text-sm md:text-base mt-2">Dominance over Python, TypeScript and Java to create efficient and scalable solutions.</p>
        </div>
      </header>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="skill-item">
              <img src="/assets/typescript.svg" alt="TypeScript" className="h-12 mx-auto" />
              <p className="mt-2">TypeScript</p>
            </div>
            <div className="skill-item">
              <img src="/assets/python.svg" alt="Python" className="h-12 mx-auto" />
              <p className="mt-2">Python</p>
            </div>
            <div className="skill-item">
              <img src="/assets/java.svg" alt="Java" className="h-12 mx-auto" />
              <p className="mt-2">Java</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">About This</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          This project was created to demonstrate my skills as a developer and data scientist. Each section reflects modern practices, intuitive design, and technical excellence.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;