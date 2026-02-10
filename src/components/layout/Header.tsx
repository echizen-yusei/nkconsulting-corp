import { Link } from "react-router-dom";
import GlobalNav from "./GlobalNav";
import logo from "../../assets/images/logo.svg";
import "./header.css";
import "../../index.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="NK Consulting" />
      </Link>
      <GlobalNav />
    </header>
  );
};

export default Header;
