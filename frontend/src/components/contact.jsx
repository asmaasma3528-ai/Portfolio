import React, { useState, useRef } from "react";
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
  const [statusType, setStatusType] = useState("");

  const statusTimerRef = useRef(null);

  const showStatus = (message, type = "info", autoHide = true) => {
    setStatus(message);
    setStatusType(type);

    if (!autoHide) return;

    if (statusTimerRef.current) {
      clearTimeout(statusTimerRef.current);
    }

    statusTimerRef.current = setTimeout(() => {
      setStatus("");
      setStatusType("");
    }, 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    showStatus("Sending...", "info", false);
    try {
      const response = await fetch(
        "https://pavan-portfolio-api.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        showStatus(
          "Thanks for reaching out! I'll get back to you within 24 hours.",
          "success"
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        showStatus("Oops! Something went wrong on the server.", "error");
      }
    } catch (error) {
      showStatus("Error: Make sure your backend is running!", "error");
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
        <p
          className={`transition-opacity duration-300 ${
            status ? "opacity-100" : "opacity-0"
          }`}
        >
          {status}
        </p>

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

        {statusType === "success" && (
          <div className="popup success">✅ Message sent successfully!!</div>
        )}

        {statusType === "error" && (
          <div className="popup error">❌ Error. Please try again.</div>
        )}
      </div>
    </section>
  );
}
