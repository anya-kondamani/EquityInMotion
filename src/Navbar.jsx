import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">EquityInMotion</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/learn">Learn</Link>
        </li>
        <li>
          <a href="/practice">Practice</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;