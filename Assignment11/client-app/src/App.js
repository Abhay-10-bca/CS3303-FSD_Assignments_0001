import { useState } from 'react';
import NavbarComponent from './components/NavbarComponent';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const handleGetStarted = () => {
    setMessage('Welcome! Your journey starts here.');
    document.getElementById('features').scrollIntoView({
      behavior: 'smooth'
    });
  };

  const handlePlanClick = (plan) => {
    setMessage(`${plan} plan selected!`);
  };

  return (
    <div className="app">

      <NavbarComponent />

      {message && (
        <div className="notification">
          {message}
          <button onClick={() => setMessage('')}>×</button>
        </div>
      )}

      <section className="hero" id="home">
        <div className="hero-content">
          <span className="badge">🚀 Welcome to the Future</span>

          <h1>
            Build Something
            <span> Amazing</span>
          </h1>

          <p>
            A modern and interactive React application built with
            React Bootstrap and a powerful Express backend.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={handleGetStarted}
            >
              Get Started →
            </button>

            <a href="#features" className="secondary-btn">
              Explore Features
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="floating-icon">⚡</div>
          <h3>React + Express</h3>
          <p>Modern full-stack web development</p>

          <div className="mini-stats">
            <div>
              <strong>100%</strong>
              <span>Responsive</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Available</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div>
          <strong>10+</strong>
          <span>Features</span>
        </div>

        <div>
          <strong>99%</strong>
          <span>Performance</span>
        </div>

        <div>
          <strong>100%</strong>
          <span>Responsive</span>
        </div>

        <div>
          <strong>24/7</strong>
          <span>Support</span>
        </div>
      </section>

      <section className="features section" id="features">
        <div className="section-heading">
          <span>WHAT WE OFFER</span>
          <h2>Powerful Features</h2>
          <p>
            Everything you need to create a modern web experience.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast Performance</h3>
            <p>
              Enjoy a fast and smooth experience with a modern
              React-based interface.
            </p>
            <a href="#features">Learn more →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Fully Responsive</h3>
            <p>
              The application automatically adapts to desktops,
              tablets and mobile devices.
            </p>
            <a href="#features">Learn more →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure Backend</h3>
            <p>
              Built with Express to provide a reliable foundation
              for backend functionality.
            </p>
            <a href="#features">Learn more →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Modern Design</h3>
            <p>
              Clean layouts, smooth animations and interactive
              components create an engaging experience.
            </p>
            <a href="#features">Learn more →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon">☁️</div>
            <h3>Cloud Ready</h3>
            <p>
              The application structure can easily be extended
              for cloud deployment.
            </p>
            <a href="#features">Learn more →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🧩</div>
            <h3>Easy Integration</h3>
            <p>
              React components and Express APIs can be expanded
              as your application grows.
            </p>
            <a href="#features">Learn more →</a>
          </div>

        </div>
      </section>

      <section className="pricing section" id="pricing">
        <div className="section-heading">
          <span>SIMPLE PLANS</span>
          <h2>Choose Your Plan</h2>
          <p>Flexible options for different requirements.</p>
        </div>

        <div className="pricing-grid">

          <div className="price-card">
            <h3>Starter</h3>
            <div className="price">Free</div>

            <ul>
              <li>✓ Basic Features</li>
              <li>✓ Responsive Design</li>
              <li>✓ Community Support</li>
            </ul>

            <button onClick={() => handlePlanClick('Starter')}>
              Select Plan
            </button>
          </div>

          <div className="price-card popular">
            <div className="popular-label">POPULAR</div>

            <h3>Professional</h3>
            <div className="price">
              $19<span>/month</span>
            </div>

            <ul>
              <li>✓ All Starter Features</li>
              <li>✓ Advanced Features</li>
              <li>✓ Priority Support</li>
            </ul>

            <button onClick={() => handlePlanClick('Professional')}>
              Select Plan
            </button>
          </div>

          <div className="price-card">
            <h3>Enterprise</h3>
            <div className="price">$49<span>/month</span></div>

            <ul>
              <li>✓ Everything Included</li>
              <li>✓ Custom Solutions</li>
              <li>✓ Dedicated Support</li>
            </ul>

            <button onClick={() => handlePlanClick('Enterprise')}>
              Select Plan
            </button>
          </div>

        </div>
      </section>

      <section className="details section" id="deets">
        <div className="details-content">
          <div>
            <span className="section-label">WHY CHOOSE US</span>
            <h2>Designed for modern developers.</h2>

            <p>
              This application combines the flexibility of React
              with the power of Express to create a complete
              full-stack development experience.
            </p>

            <div className="check-list">
              <p>✓ Component-based architecture</p>
              <p>✓ Responsive Bootstrap interface</p>
              <p>✓ Express backend integration</p>
              <p>✓ Easy to extend and maintain</p>
            </div>
          </div>

          <div className="details-box">
            <div className="circle">⚛️</div>
            <h3>React Powered</h3>
            <p>
              Build interactive interfaces using reusable
              components.
            </p>
          </div>
        </div>
      </section>

      <section className="memes section" id="memes">
        <div className="section-heading">
          <span>HAVE SOME FUN</span>
          <h2>Developer Corner 😎</h2>
          <p>
            Because every developer deserves a break.
          </p>
        </div>

        <div className="meme-card">
          <div className="meme-emoji">💻 ☕</div>

          <h3>
            "It works on my machine."
          </h3>

          <p>
            — Every developer at least once
          </p>

          <button
            onClick={() => setMessage('Coffee break activated! ☕')}
          >
            Take a Coffee Break ☕
          </button>
        </div>
      </section>

      <footer>
        <div>
          <h3>React-Bootstrap</h3>
          <p>Building better web experiences.</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#deets">Details</a>
        </div>

        <p className="copyright">
          © 2026 React-Bootstrap. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;