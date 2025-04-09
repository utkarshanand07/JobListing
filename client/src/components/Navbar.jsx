import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">JobListing</Link>
        <ul className="navbar-links">
          <li><Link to="/employee/feed">Feed</Link></li>
          <li><Link to="/employer/dashboard">Dashboard</Link></li>
          <li><Link to="/employer/create">Create</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
