import { Link } from 'react-router-dom';
import './Home.css';
import backgroundVideo from '../videos/Backgroundvedio.mp4';

const Home = () => {
  return (
    <section className="home" id="home">
      <video
        className="video-background"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="content-overlay">
        <h1>Mounika Muttalooru</h1>
        <h2>Software Engineer</h2>
        <p>
        Software Engineer with 3+ years of experience specializing in front-end development and scalable full-stack solutions. Expertise in building and optimizing robust web applications using TypeScript, React, and Material UI, with a focus on enhancing user experience and integrating complex APIs. Experienced with cloud platforms like AWS Amplify for deploying efficient and secure systems. Skilled in developing solutions for e-commerce platforms and search technologies such as Elasticsearch. Capable of delivering high-quality, maintainable code and conducting end-to-end testing with Cypress.io.
        </p>
        <div className="cta-buttons">
          <Link to="/resume" className="btn btn-primary">
            Resume
          </Link>
          <Link to="/contact" className="btn btn-outline-light">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home; 