"use client";

export default function Testimonials() {
  return (
    <section className="testimonials reveal">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h3>What Clients Say</h3>
          <p>
            I’ve worked with founders, agencies, and business owners to deliver
            reliable, high-quality web solutions.
          </p>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card reveal-item">
            <p>
              “The website exceeded our expectations. Clean design, fast
              loading, and very clear communication throughout the project.”
            </p>
            <strong>Sarah M.</strong>
            <span>Startup Founder</span>
          </div>

          <div className="testimonial-card reveal-item">
            <p>
              “Professional, reliable, and detail-oriented. The final result
              looked polished and performed extremely well.”
            </p>
            <strong>Daniel R.</strong>
            <span>Agency Owner</span>
          </div>

          <div className="testimonial-card reveal-item">
            <p>
              “Clear process, fast turnaround, and great results. I’d absolutely
              recommend working together.”
            </p>
            <strong>Emily K.</strong>
            <span>Business Owner</span>
          </div>
        </div>
      </div>
    </section>
  );
}
