import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="logo">Royal Celebration</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/login">Login</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </div>
  );
};

export default Navbar;
