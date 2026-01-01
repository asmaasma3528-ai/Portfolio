import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact-container" id="contact">
      <div className="contact-box">
        <h2 className="section-title">Let's Build Something <span>Great</span></h2>
        <p>I am currently open for new projects and ETL consulting.</p>
        
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Tell me about your project..." rows="5"></textarea>
          <button type="submit" className="btn-cyan">Send Message</button>
        </form>
      </div>
    </section>
  );
}