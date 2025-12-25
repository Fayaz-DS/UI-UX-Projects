"use client";

export default function CTA() {
  function scrollToContact() {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  }

  return (
    <section className="final-cta reveal">
      <div className="final-cta-container">
        <h3>Let’s Talk About Your Project</h3>
        <p>
          I’d be happy to discuss your goals and suggest the best approach.
        </p>

        <button onClick={scrollToContact}>
          Schedule a Free Consultation
        </button>
      </div>
    </section>
  );
}
