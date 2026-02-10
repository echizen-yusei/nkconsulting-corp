import "./footer.css"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrap">
        <div className="company-info">
          <p>株式会社 NK CONSULTING</p>
          <p>〒232-0056</p>
          <p>神奈川県横浜市南区通町3丁目61-2 3F</p>
        </div>
        <ul className="links">
          <li><Link to="/company">会社概要</Link></li>
          <li><a href="#business">事業内容</a></li>
          <li><a href="#contact">お問い合わせ内容</a></li>
          <li><Link to="/privacy-policy">プライバシーポリシー</Link></li>
        </ul>
      </div>
      <p className="copyright">＠All right reserved by 株式会社 NK CONSULTING</p>
    </footer>
  );
};

export default Footer;