import Image from "next/image";

const contactItems = [
  { icon: "phone", label: "(214) 478-6215" },
  { icon: "mail", label: "ALEX@PATRIOTNEIGHBORHOODSERVICES.COM" },
  { icon: "web", label: "WWW.PATRIOTNEIGHBORHOODSERVICES.COM" },
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

export default function Home() {
  return (
    <main className="business-card" aria-label="Patriot Neighborhood Services business card inspired landing page">
      <section className="flag-panel" aria-hidden="true">
        <div className="blue-field" />
        <div className="stripe stripe-one" />
        <div className="stripe stripe-two" />
        <div className="stripe stripe-three" />
        <div className="stripe stripe-four" />
      </section>

      <section className="brand-lockup">
        <Image
          className="patriot-logo"
          src="/patriot-logo.png"
          alt="Patriot Neighborhood Services"
          width={1186}
          height={440}
          priority
        />
        <p className="operator">ALEX STOUFFER - OPERATOR</p>
      </section>

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
          <span>NEIGHBORHOODS</span>
        </p>
      </section>
    </main>
  );
}
