import { Link } from "react-router-dom";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

function Footer() {
  return (
    <footer className="bg-heading px-6 pb-6 pt-14 text-fwhite sm:px-10 lg:px-12">
      <div className="mx-auto grid max-w-300 gap-12 border-b border-fwhite/20 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <img
              src="/homepage/tl_small_logo.webp"
              className="h-11 w-11 object-contain"
              alt="TL Company logo"
            />
            <span className="border-l border-fwhite/25 pl-3">
              <span className="block font-montserrat text-lg font-bold leading-none text-basic">
                <span className="gold-text">TL</span>Company
              </span>
              <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.22em] text-fwhite/65">
                Legal counsel
              </span>
            </span>
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-7 text-fwhite/70">
            Clear, considered legal guidance for the matters that shape your
            life and business.
          </p>
        </div>

        <div>
          <h2 className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-light-yellow">
            Explore
          </h2>
          <nav
            className="mt-5 flex flex-col items-start gap-3 text-sm"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link) => (
              <Link
                to={link.href}
                key={link.name}
                className="transition-colors duration-300 hover:text-basic"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-light-yellow">
            Get in touch
          </h2>
          <address className="mt-5 space-y-2 text-sm not-italic leading-6 text-fwhite/80">
            <p>500 Terry Francine Street</p>
            <a
              className="block pt-3 transition-colors duration-300 hover:text-basic"
              href="tel:1234567890"
            >
              Tel: 123-456-7890
            </a>
            <a
              className="block transition-colors duration-300 hover:text-basic"
              href="mailto:hello@tlcompany.com"
            >
              hello@tlcompany.com
            </a>
          </address>
        </div>
      </div>

      <div className="mx-auto flex max-w-300 flex-col gap-3 pt-5 text-[11px] text-fwhite/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} TL Company. All rights reserved.</p>
        <p>Legal counsel with clarity.</p>
      </div>
    </footer>
  );
}

export default Footer;
