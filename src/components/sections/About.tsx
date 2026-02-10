import "./about.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <div className="about-contents">
        <div className="about-texts">
          <h2 className="about-copy">経営者の<br className="sp-br"></br>ネットワークで<br></br>企業を育てる</h2>
          <p>
            日々絶え間なく、全力で会社と向き合い、<br></br>
            従業員や、会社のこと、さらには数字のこと、<br></br>
            様々な悩みを抱え、責任の重さを感じながら過ごしている経営者。<br></br>
            そんな経営者に寄り添い、支えること。<br></br>
            夢をともに叶えること。それが私たちの使命です。
          </p>
        </div>
        <Link to="/company" className="about-button">
          <p>会社概要を見る</p>
        </Link>
      </div>
    </section>
  );
};

export default About;
