
import './AboutUs.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function AboutUs() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>About Us - Economic Analysis & Computation</title>
      </Helmet>

      <div className="about-us-container">
        <h1>About Us</h1>
        <div className="about-content">
          <section className="mission-section">
            <h2>Our Mission</h2>
            <p>We are dedicated to providing comprehensive economic analysis and computational solutions to help businesses and individuals make informed decisions.</p>
          </section>
          
          <section className="vision-section">
            <h2>Our Vision</h2>
            <p>To become the leading platform for economic insights and analysis, making complex economic data accessible and actionable for everyone.</p>
          </section>

          <section className="team-section">
            <h2>Our Team</h2>
            <p>Our team consists of experienced economists, data scientists, and developers working together to deliver the best economic analysis tools.</p>
          </section>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default AboutUs;