import "./privacypolicy.css";

// pages/PrivacyPolicy.tsx
const PrivacyPolicy = () => {
  return (
    <section className="section">
        <h1 className="page-h1">プライバシーポリシー</h1>
        <div className="policy-content-wrap">
            <div className="policy-content">
                <h2>個人情報の取得について</h2>
                <p>当社は、本サイトにおいて以下の場合に、氏名、会社名、メールアドレス、電話番号、その他必要な情報を取得することがあります。</p>
                <ul>
                    <li>・お問い合わせフォームからのご連絡</li>
                    <li>・その他、本サイトを通じたご連絡</li>
                </ul>
            </div>
            <div className="policy-content">
                <h2>個人情報の利用目的</h2>
                <p>取得した個人情報は、以下の目的の範囲内で利用いたします。</p>
                <ul>
                    <li>・お問い合わせ内容への回答・連絡のため</li>
                    <li>・サービスの提供およびそれに付随する業務遂行のため</li>
                    <li>・採用選考および採用に関する連絡のため</li>
                    <li>・サービス向上、業務改善のため</li>
                    <li>・必要に応じた重要なお知らせの連絡のため</li>
                </ul>
                <p>上記以外の目的で利用する場合は、あらかじめご本人の同意を得るものとします。</p>
            </div>
            <div className="policy-content">
                <h2>個人情報の第三者提供について</h2>
                <p>当社は、以下の場合を除き、取得した個人情報を第三者に提供することはありません。</p>
                <ul>
                    <li>・ご本人の同意がある場合</li>
                    <li>・法令に基づき開示が求められた場合</li>
                    <li>・人の生命、身体または財産の保護のために必要であり、本人の同意を得ることが困難な場合</li>
                </ul>
            </div>
            <div className="policy-content">
                <h2>個人情報の開示・訂正・削除について</h2>
                <p>当社は、個人情報への不正アクセス、紛失、改ざん、漏えい等を防止するため、適切な安全管理措置を講じ、個人情報の厳重な管理を行います。</p>
            </div>
            <div className="policy-content">
                <h2>プライバシーポリシーの見直しについて</h2>
                <p>当社は、法令の改正や運営方針の変更等に応じて、本ポリシーの内容を適宜見直し、改善に努めます。<br></br>変更後のプライバシーポリシーは、本サイトに掲載した時点で効力を生じるものとします。</p>
            </div>
            <div className="policy-content">
                <h2>お問い合わせ窓口</h2>
                <p>個人情報の取り扱いに関するお問い合わせは、本サイト内のお問い合わせフォームよりご連絡ください。</p>
            </div>
        </div>

    </section>
 );
};
export default PrivacyPolicy;