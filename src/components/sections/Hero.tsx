import { useState, useEffect } from "react";
import fv1 from "../../assets/images/fv_1.png";
import fv2 from "../../assets/images/fv_2.png";
import fv3 from "../../assets/images/fv_3.jpg";
import "./Hero.css";

const images = [fv1, fv2, fv3];
const interval = 4000;

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg-sticky">
        {images.map((img, i) => (
          <div
          key={i}
          className={`bg ${index === i ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        {/* 黒オーバーレイ */}
        <div className="overlay" />
      </div>

      {/* テキスト */}
      <div className="hero-content">
        <div className="hero-title">
          <h1>株式会社 NK CONSULTING</h1>
          <div className="red-line" />
          <p>
            横浜に根ざした視点で、中小企業の成長と挑戦を支えるコンサルティング
          </p>
        </div>
        {/* プログレスバー（3つのバーを表示） */}
        <div className="progressContainer">
          {images.map((_, i) => (
            <div key={i} className="progressWrap">
              <div
                className={`progressBar ${index === i ? "animating" : ""}`}
                style={{
                  animationDuration: index === i ? `${interval}ms` : "0s",
                  width: index > i ? "100%" : index === i ? "0%" : "0%"
                  // 補足: 過ぎたスライドを埋めたままにするなら index > i ? "100%" を使用
                  // 今回はループに合わせてリセットされる挙動にしています
                }}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;
