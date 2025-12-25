export const metadata = {
  title: "Case Studies",
  description: "Selected projects and case studies."
};

export default function Work() {
  return (
    <section className="container reveal">
      <h1>Case Studies</h1>
      <p>
        A selection of projects where I helped clients improve performance,
        design, and conversions.
      </p>

      <div className="services-grid">
        <div className="service-card reveal-item">
          <h3>SaaS Landing Page</h3>
          <p>
            Improved load speed and conversion rate for a SaaS startup.
          </p>
        </div>

        <div className="service-card reveal-item">
          <h3>Business Website Redesign</h3>
          <p>
            Modernized UI and improved SEO for a service-based business.
          </p>
        </div>
      </div>
    </section>
  );
}
