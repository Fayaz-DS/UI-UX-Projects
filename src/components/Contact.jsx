"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("Thank you! I’ll get back to you within 24 hours.");
      e.target.reset();
    } catch (err) {
      setStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="contact reveal">
      <div className="contact-container">
        <h3>Get in Touch</h3>

        <form onSubmit={handleSubmit} className="contact-form">
          <input name="name" placeholder="Name" required />
          <input name="email" type="email" placeholder="Email" required />
          <textarea name="message" placeholder="Project details" required />

          <button type="submit">Request Consultation</button>
          {status && <p>{status}</p>}
        </form>
      </div>
    </section>
  );
}
