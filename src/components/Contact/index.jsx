import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { GiSmartphone } from "react-icons/gi";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ikqk4pc",
      "template_vbnjecz",
      form.current,
      "jxEkflVcDHlbAQHJ5"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get It Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__icon" />
            <h4>Email</h4>
            <h5>nxtrong.3112@gmail.com</h5>
            <a href="mailto:nxtrong.3112@gmail.com">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__icon" />
            <h4>Messenger</h4>
            <h5>Nguyễn Xuân Trọng</h5>
            <a href="http://m.me/RaiRyuuko">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <GiSmartphone className="contact__icon" />
            <h4>Phone Number</h4>
            <h5>076.261.1994</h5>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="text"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          />
          <input
            type="submit"
            className="btn btn-primary"
            value="Send"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
