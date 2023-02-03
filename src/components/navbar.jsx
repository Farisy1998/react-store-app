import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <div className="navbar navbar-dark navbar-expand bg-primary m-2">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/orders">
              Orders
            </Link>
          </li>
        </ul>
      </div>
    );
}
 
export default Navbar;