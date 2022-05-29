import { Link } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    color: "rgb(31, 26, 26)",
  };
  return (
    <nav>
      <h3>API</h3>

      <ul className="nav-link">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/fetch">
          <li>Fetch</li>
        </Link>
        <Link style={navStyle} to="/axios">
          <li>Axios</li>
        </Link>
      </ul>
    </nav>
  );
};
export default Nav;
