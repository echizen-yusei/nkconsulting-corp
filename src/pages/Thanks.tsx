import { Link } from "react-router-dom";
import "./thanks.css";

// pages/Thanks.tsx
const Thanks = () => {
  return (
    <section className="section">
        <h1 className="page-h1">お問い合わせありがとうございました</h1>
        <div className="policy-content-wrap">
            <p>お問い合わせを受け付けました。ありがとうございます。<br></br>
            ご入力いただいたメールアドレス宛に、自動返信メールをお送りしております。<br></br>
            通常1営業日以内に担当者よりご返信いたします。
            <br></br>
            内容により、回答までお時間をいただく場合がございます。
            </p>
            <p>
            自動返信が届かない場合は、迷惑メールフォルダをご確認いただくか、<br></br>
            受信設定でドメイン拒否がないかご確認ください。
            </p>
            <Link to="/"><button>Topへ戻る</button></Link>
        </div>
    </section>
  );
};
export default Thanks;