import Image from "next/image";

const contactItems = [
  { icon: "phone", label: "(214) 478-6215" },
  { icon: "mail", label: "ALEX@PATRIOTNEIGHBORHOODSERVICES.COM" },
  { icon: "web", label: "WWW.PATRIOTNEIGHBORHOODSERVICES.COM" },
];

const services = [
  { icon: "flag", title: "Flag Installation and Maintenance" },
  { icon: "power-washing", title: "Power Washing" },
  { icon: "detailing", title: "Detailing", detail: "Auto, truck, golf cart" },
  { icon: "exterior-cleaning", title: "Exterior Cleaning" },
];

function ContactIcon({ type }: { type: string }) {
  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.7 2.6c.5-.2 1.1 0 1.4.5l1.6 3c.3.5.2 1.1-.2 1.5L8.2 8.8c1 2.1 2.7 3.8 4.9 4.9l1.2-1.3c.4-.4 1-.5 1.5-.2l3 1.6c.5.3.7.9.5 1.4l-1.1 3.4c-.2.6-.8 1-1.4 1C8.8 19.7 4.3 15.2 4.3 7.3c0-.6.4-1.2 1-1.4l1.4-3.3Z" />
      </svg>
    );
  }

  if (type === "mail") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.8 6.4c0-1 .8-1.8 1.8-1.8h12.8c1 0 1.8.8 1.8 1.8v11.2c0 1-.8 1.8-1.8 1.8H5.6c-1 0-1.8-.8-1.8-1.8V6.4Zm2.1.5 6.1 4.5 6.1-4.5H5.9Zm12.6 2.1-5.7 4.2a1.4 1.4 0 0 1-1.6 0L5.5 9v8.2h13V9Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.8a9.2 9.2 0 1 0 0 18.4 9.2 9.2 0 0 0 0-18.4Zm5.9 5.6h-2.6a14.3 14.3 0 0 0-1-2.8 6.7 6.7 0 0 1 3.6 2.8Zm-5.9-3c.5.8 1 1.8 1.3 3h-2.6c.3-1.2.8-2.2 1.3-3ZM5.1 13.1a6.3 6.3 0 0 1 0-2.2h3.2a16 16 0 0 0 0 2.2H5.1Zm1 2.5h2.6c.3 1 .6 2 1 2.8a6.7 6.7 0 0 1-3.6-2.8Zm2.6-7.2H6.1a6.7 6.7 0 0 1 3.6-2.8c-.4.8-.7 1.7-1 2.8Zm3.3 10.2c-.5-.8-1-1.8-1.3-3h2.6c-.3 1.2-.8 2.2-1.3 3Zm1.8-5.5h-3.6a13 13 0 0 1 0-2.2h3.6a13 13 0 0 1 0 2.2Zm.5 5.3c.4-.8.7-1.7 1-2.8h2.6a6.7 6.7 0 0 1-3.6 2.8Zm1.4-5.3a16 16 0 0 0 0-2.2h3.2a6.3 6.3 0 0 1 0 2.2h-3.2Z" />
    </svg>
  );
}

function ServiceIcon({ type }: { type: string }) {
  if (type === "flag") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M16 55V9" />
        <path d="M18 11c10-5 17 5 28 0v27c-11 5-18-5-28 0" />
        <path d="M23 17c7-2 13 4 20 1M23 24c7-2 13 4 20 1M23 31c7-2 13 4 20 1" />
      </svg>
    );
  }

  if (type === "power-washing") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M15 38 28 25l9 9-13 13c-4 4-12-5-9-9Z" />
        <path d="m35 23 7-7 8 8-7 7" />
        <path d="M44 27h13" />
        <path d="M50 20 60 15M51 34l9 5" />
        <path d="M22 41 13 55" />
      </svg>
    );
  }

  if (type === "detailing") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M14 38h36l-4-11c-1-3-4-5-8-5H26c-4 0-7 2-8 5l-4 11Z" />
        <path d="M12 38v9h40v-9" />
        <circle cx="21" cy="47" r="4" />
        <circle cx="43" cy="47" r="4" />
        <path d="m13 27-5-3M51 27l5-3M28 13l2 5M42 11l-3 6M50 16l-5 4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M12 34 32 17l20 17" />
      <path d="M18 32v20h28V32" />
      <path d="M28 52V40h8v12" />
      <path d="M25 33h5v5h-5zM34 33h5v5h-5z" />
      <path d="M49 48c4-4 6-9 7-15" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <section className="business-card" aria-label="Patriot Neighborhood Services business card inspired landing page">
        <Image
          className="front-header"
          src="/front-header.png"
          alt="Patriot Neighborhood Services — Alex Stouffer, Operator"
          width={2271}
          height={918}
          priority
        />

        <section className="card-footer">
          <address className="contact-list">
            {contactItems.map((item) => (
              <div className="contact-row" key={item.label}>
                <span className="icon-circle">
                  <ContactIcon type={item.icon} />
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </address>

          <div className="footer-divider" aria-hidden="true" />

          <p className="pride-message">
            <span>SERVING OUR</span>
            <span>NEIGHBORS IN</span>
            <span>ROCKWALL &amp; HEATH</span>
          </p>
        </section>
      </section>

      <section className="quote-cta" aria-label="Patriot Neighborhood Services tagline">
        <p>We handle the to-do list.</p>
        <p>You enjoy more freedom.</p>
      </section>

      <section className="services-section" aria-labelledby="services-heading">
        <div className="services-heading-row">
          <span aria-hidden="true" />
          <h2 id="services-heading">Services We Provide</h2>
          <span aria-hidden="true" />
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">
                <ServiceIcon type={service.icon} />
              </div>
              <h3>{service.title}</h3>
              {service.detail ? <p>{service.detail}</p> : null}
            </article>
          ))}
        </div>

        <p className="services-tagline">Strong values. Quality work. Reliable neighborhood service.</p>
      </section>
    </main>
  );
}
