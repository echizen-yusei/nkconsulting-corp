import b1 from "../../assets/images/business_1.jpg";
import b2 from "../../assets/images/business_2.jpg";
import "./business.css";

const Business = () => {
  return (
    <section className="business" id="business">
      <div className="business-wrap">
          <h2 className="sec-title">事業内容</h2>
          <div className="business-content-wrap">
            <a href="https://azure-forest-yokohama.jp/"  target="_blank" className="business-content" >
              <div className="business-bg" style={{ backgroundImage: `url(${b1})` }}></div>
              <div className="business-overlay"></div> 
              <h3>Azure Forest 横濱</h3>
              <p>2025年12月に弘明寺でオープンした創作イタリアンレストラン。落ち着いた隠れ家のような空間で、季節を感じる料理と厳選されたワインをお楽しみいただけます。</p>
            </a>
            <a href="https://nk-consulting.jp" target="_blank" className="business-content" >
              <div className="business-bg" style={{ backgroundImage: `url(${b2})` }}></div>
              <div className="business-overlay"></div> 
              <h3>NK Executive Member's Club</h3>
              <p>経営者による経営者のための会員制クラブ。会員限定のコンサルサービスや特典、各種イベントを提供しております。</p>
            </a>
          </div>
      </div>
    </section>
  );
};

export default Business;
