import "./company.css"
import company from "../assets/images/company-img.png";

const Company = () => {
  return (
    <section className="section">
      <h1 className="page-h1">会社概要</h1>
      <div className="company-info-wrap">
        <img className="com-img" src={company} alt="The city of Yokohama"></img>
        <div className="company-info">
          <div className="info">
            <h3>商号</h3>
            <p>株式会社 NK CONSULTING</p>
          </div>
          <div className="info">
            <h3>代表者</h3>
            <p>則武　和宏</p>
          </div>
          <div className="info">
            <h3>設立</h3>
            <p>2025年8月27日</p>
          </div>
          <div className="info">
            <h3>事業内容</h3>
            <p>各種コンサルティング</p>
          </div>
          <div className="info">
            <h3>資本金</h3>
            <p>200万</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
