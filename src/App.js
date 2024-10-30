import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-scroll';
import { FaReact, FaNodeJs, FaJava, FaJsSquare, FaCuttlefish, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHtml5, FaCss3Alt, FaPython } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Carousel from './components/js/Carousel';
import ParallaxSection from './components/js/ParallaxSection';
import Timeline from './components/js/Timeline';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="portfolio">
      <header className="header">
        <div className="logo">
          <img src="https://i.imgur.com/krEtGM5.png" alt="Logo" />
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
        </div>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="projects" smooth={true} duration={500}>Projetos</Link></li>
            <li><Link to="about" smooth={true} duration={500}>Sobre Mim</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contato</Link></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="carousel-section">
        <Carousel />
      </section>

      <section id="skills" className="skills-section light-theme">
        <h2>Minhas Habilidades</h2>
        <div className="skills">
          <motion.div whileHover={{ scale: 1.2 }} className="skill-icon">
            <FaReact size={60} color="#61DBFB" />
            <p>React.js</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="skill-icon">
            <FaNodeJs size={60} color="#43853D" />
            <p>Node.js</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="skill-icon">
            <FaCuttlefish size={60} color="#00599C" />
            <p>C++</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="skill-icon">
            <FaJava size={60} color="#178600" />
            <p>Java</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="skill-icon">
            <FaJsSquare size={60} color="#F0DB4F" />
            <p>JavaScript</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="skill-icon">
            <FaHtml5 size={60} color="#ec6231" />
            <p>HTML5</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="skill-icon">
            <FaCss3Alt size={60} color="#00599C" />
            <p>CSS3</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="skill-icon">
            <FaPython size={60} color="#F0DB4F" />
            <p>Python</p>
          </motion.div>
        </div>
      </section>

      <section id="about" className="about-section dark-theme">
        <h2>Sobre Mim</h2>
        <p>
          Sou um desenvolvedor com experiência em várias tecnologias, como React.js, Node.js, C++, C#, e JavaScript. Ao longo dos anos, 
          trabalhei em projetos diversificados, desde aplicativos web interativos até soluções corporativas. Atualmente, estou 
          desenvolvendo um site para uma empresa de tecnologia, focando em inovação e otimização de processos. Além disso, estou 
          criando um sistema de mercado online que pretende revolucionar a forma como pequenas empresas gerenciam suas vendas e 
          inventários online.
        </p>
      </section>

      {/* Seção de Projetos Anteriores */}
      <section id="projects" className="projects-section light-theme">  
        <h2>Projetos</h2>
        <div className="projects-container">
        <motion.div whileHover={{ scale: 1.1 }} initial={{ opacity: 0, y: 50 }}  whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 0.6 }}  className="project-box">
            <div className="project-image">
              <img src="https://i.imgur.com/mAm9dMn.png" alt="Projeto 1" />
            </div>
            <div className="project-info">WordPress Site SINCES</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} initial={{ opacity: 0, y: 50 }}  whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 0.6 }}  className="project-box">
               <div className="project-image">
              <img src="https://i.imgur.com/mAm9dMn.png" alt="Projeto 2" />
            </div>
            <div className="project-info">Projeto 2: Descrição breve.</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} initial={{ opacity: 0, y: 50 }}  whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 0.6 }}  className="project-box">
            <div className="project-image">
              <img src="https://i.imgur.com/mAm9dMn.png" alt="Projeto 3" />
            </div>
            <div className="project-info">Projeto 3: Descrição breve.</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} initial={{ opacity: 0, y: 50 }}  whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 0.6 }}  className="project-box">
            <div className="project-image">
              <img src="https://i.imgur.com/mAm9dMn.png" alt="Projeto 4" />
            </div>
            <div className="project-info">Projeto 4: Descrição breve.</div>
          </motion.div>
        </div>
      </section>

      {/* Seção de Meus Principais Projetos */}
      <section id="main-projects" className="main-projects-section dark-theme">  
  <h2>Meus Principais Projetos</h2>

  {/* Projeto 1 */}
  <div className="project">
    <div className="project-video">
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/VIDEO_ID_1" 
        title="Projeto 1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className="project-description">
      <h3>Projeto 1: WordPress Site SINCES</h3>
      <p>Descrição detalhada do projeto 1. Aqui você pode falar sobre as tecnologias utilizadas, o processo de desenvolvimento e os resultados alcançados.</p>
    </div>
  </div>

  {/* Projeto 2 (invertido) */}
  <div className="project reverse">
    <div className="project-description">
      <h3>Projeto 2: C# - Consulta de Produtos</h3>
      <p>Descrição detalhada do projeto 2. Aqui você pode falar sobre as tecnologias utilizadas, o processo de desenvolvimento e os resultados alcançados.</p>
    </div>
    <div className="project-video">
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/VIDEO_ID_2" 
        title="Projeto 2"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>

  {/* Projeto 3 */}
  <div className="project">
    <div className="project-video">
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/VIDEO_ID_3" 
        title="Projeto 3"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className="project-description">
      <h3>Projeto 3: Descrição do Projeto</h3>
      <p>Descrição detalhada do projeto 3. Aqui você pode falar sobre as tecnologias utilizadas, o processo de desenvolvimento e os resultados alcançados.</p>
    </div>
  </div>
</section>

      <section id="parallax" className="parallax-section">
      <ParallaxSection />
      </section>

      <section id="timeline" className="timeline-section">
        <Timeline />
      </section>

      <section id="contact" className="contact-section white-theme">
        <h2>Contato</h2>
        <p>Entre em contato comigo pelo e-mail: contato@rosdrego.com.br</p>
      </section>

      <footer className="footer">
        <p>© 2024 by Rosdrego. Criado com React.js</p>
        <h3>Redes Sociais</h3>
        <div className="social-icons">
          <a href="https://github.com/rosdrego" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://twitter.com/rosdrego" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href="https://instagram.com/rosdrego" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;
