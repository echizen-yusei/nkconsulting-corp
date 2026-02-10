import { Link } from "react-router-dom";
import "./GlobalNav.css";


const GlobalNav = () => {
  return (
    <nav>
      <Link to="/company">会社概要</Link>
      <a href="#business">事業内容</a>
      <a href="#contact">お問い合わせ</a>
    </nav>
  );
};

export default GlobalNav;
