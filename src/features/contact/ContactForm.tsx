import "./contactform.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    company: "",
    name: "",
    kana: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    setForm({
      ...form,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.agree) {
      alert("プライバシーポリシーに同意してください");
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      navigate("/thanks");
    } else {
      alert("送信に失敗しました");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>会社名
      <input placeholder="会社名" name="company" onChange={handleChange} required/>
      </label>
      <label>お名前
      <input placeholder="お名前" name="name" onChange={handleChange} required/>
      </label>
      <label>お名前(ふりがな)
      <input placeholder="お名前(ふりがな)" name="kana" onChange={handleChange} required/>
      </label>
      <label>メールアドレス
      <input placeholder="メールアドレス" name="email" onChange={handleChange} required/>
      </label>
      <label>電話番号
      <input placeholder="電話番号" name="phone" onChange={handleChange} required/>
      </label>
      <label>お問い合わせ内容
      <textarea placeholder="お問い合わせ内容" name="message" onChange={handleChange} required/>
      </label>
      <label className="checkbox">
      <input type="checkbox" name="agree" onChange={handleChange} required/>
      プライバシーポリシーに同意します
      </label>
      <button type="submit">送信</button>
    </form>
  );
};

export default ContactForm;
