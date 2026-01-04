import React, { useState } from "react";
import "../styles/contact.css";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    try {
      const response = await fetch("https://pavan-portfolio-api.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setTimeout(() => {
          setStatus(
          "Thanks for reaching out! I'll get back to you within 24 hours."
        );
        setFormData({ name: "", email: "", message: "" });
        }, 2000);
      } else {
        setStatus("Oops! Something went wrong on the server.");
      }
    } catch (error) {
      setStatus("Error: Make sure your backend is running!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-container" id="contact">
      <div className="contact-box">
        <h2 className="section-title">
          Let's Build Something <span>Great</span>
        </h2>
        <p className="status-msg">{status}</p>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <textarea
              placeholder="Tell me about your project..."
              rows="5"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
            <button type="submit" className="btn-cyan">
              Send Message
            </button>
          </form>
        )}

        {status === "success" && (
          <div className="popup success">✅ Message sent successfully!!</div>
        )}

        {status === "error" && (
          <div className="popup error">❌ Error. Please try again.</div>
        )}
      </div>
    </section>
  );
}
