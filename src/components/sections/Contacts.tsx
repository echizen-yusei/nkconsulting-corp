import ContactForm from "../../features/contact/ContactForm";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-text">
        <h2 className="sec-title">お問い合わせ</h2>
        <p>弊社に関するお問い合わせはこちらの問い合わせフォームよりお願いいたします。
        内容を確認後、１営業日以内にご返信いたします。</p>
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
