import '../../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to BlocklyCode</h1>
          <p>Learn to code visually and interactively with BlocklyCode.</p>
          <div className="hero-buttons">
            <a href="/workspace" className="btn btn-primary">Get Started</a>
            <a href="#tutorials" className="btn btn-secondary">View Tutorials</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/hero-image.png" alt="BlocklyCode Hero" />
        </div>
      </section>
      <section className="features">
        <div className="feature-item">
          <h2>Drag-and-Drop Blocks</h2>
          <p>Create programs visually by dragging and dropping blocks.</p>
        </div>
        <div className="feature-item">
          <h2>Real-Time Code Conversion</h2>
          <p>See the generated code in real-time as you build your project.</p>
        </div>
        <div className="feature-item">
          <h2>Multi-Language Support</h2>
          <p>Switch between JavaScript, Python, and more.</p>
        </div>
        <div className="feature-item">
          <h2>Cloud Storage</h2>
          <p>Save and load your projects from the cloud.</p>
        </div>
      </section>
      <section className="tutorials-examples" id="tutorials">
        <h2>Tutorials and Examples</h2>
        <div className="tutorial-item">
          <h3>Getting Started with BlocklyCode</h3>
          <p>Learn the basics of BlocklyCode with this step-by-step tutorial.</p>
          <a href="#" className="btn btn-secondary">Read Tutorial</a>
        </div>
        <div className="tutorial-item">
          <h3>Example Project: Calculator</h3>
          <p>Build a simple calculator using BlocklyCode.</p>
          <a href="#" className="btn btn-secondary">View Example</a>
        </div>
      </section>
      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonial-item">
          <p>"BlocklyCode made learning programming fun and easy!"</p>
          <span>- Jane Doe</span>
        </div>
        <div className="testimonial-item">
          <p>"The real-time code conversion is amazing!"</p>
          <span>- John Smith</span>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2023 BlocklyCode. All rights reserved.</p>
        <nav>
          <a href="/">Home</a>
          <a href="/workspace">Workspace</a>
          <a href="#tutorials">Tutorials</a>
        </nav>
      </footer>
    </div>
    
  );
};

export default HomePage;