import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src="/images/logo.png" alt="Logo" />
          <span>Blockly Workspace</span>
        </a>
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/workspace">Workspace</a>
        <a href="#tutorials">Tutorials</a>
      </div>
    </nav>
  );
};

export default Navbar;