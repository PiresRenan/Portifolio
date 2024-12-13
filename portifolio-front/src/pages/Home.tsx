import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <>
      <header className="home-header">
        <div className="container">
          <h1 className="home-title">Olá, eu sou Renan Pires</h1>
          <p className="home-subtitle">Desenvolvedor Fullstack & Cientista de Dados</p>
          <p className="home-description">Dominando Python, TypeScript e Java para criar soluções eficientes e escaláveis.</p>
        </div>
      </header>

      <section className="home-skills">
        <div className="container">
          <h2 className="section-title">Habilidades</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <img src="/assets/react.svg" alt="React" className="skill-icon" />
              <p className="skill-name">React</p>
            </div>
            <div className="skill-card">
              <img src="/assets/typescript.svg" alt="TypeScript" className="skill-icon" />
              <p className="skill-name">TypeScript</p>
            </div>
            <div className="skill-card">
              <img src="/assets/python.svg" alt="Python" className="skill-icon" />
              <p className="skill-name">Python</p>
            </div>
            <div className="skill-card">
              <img src="/assets/java.svg" alt="Java" className="skill-icon" />
              <p className="skill-name">Java</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-about">
        <div className="container">
          <h2 className="section-title">Sobre o Projeto</h2>
          <p className="about-description">
            Este portfólio foi criado para demonstrar minhas habilidades como desenvolvedor e cientista de dados. Cada seção reflete práticas modernas, design intuitivo e excelência técnica.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;