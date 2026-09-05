import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import IconButton from "../common/IconButton";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav>
        {/* desktop navigation */}
        <div className="hidden items-center gap-1 rounded-sm border border-fwhite/10 bg-primary-red/35 p-1 md:flex">
          {navLinks.map((link) => (
            <Link
              to={link.href}
              key={link.name}
              className={`min-w-fit rounded-sm px-3 py-2 text-xs font-medium transition-colors duration-300 lg:px-4 ${
                location.pathname === link.href
                  ? "bg-accent text-heading"
                  : "text-fwhite hover:bg-primary-red/70 hover:text-basic"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* mobile navigation */}

        <IconButton
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <Menu size={24} />
        </IconButton>
        {/* mobile menu */}
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 h-screen bg-black/55 backdrop-blur-md transition-opacity duration-300 md:hidden ${
            isOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
        />
        <div
          className={`fixed right-0 top-0 h-screen w-[min(82vw,22rem)] border-l border-light-yellow/20 bg-heading/95 p-5 shadow-2xl backdrop-blur-md transition-transform duration-500 md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-fwhite/15 pb-4">
            <span className="font-montserrat text-sm font-semibold uppercase tracking-[0.2em] text-light-yellow">
              Menu
            </span>
            <IconButton
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
            >
              <X size={28} />
            </IconButton>
          </div>
          <div className="flex h-full flex-col items-stretch justify-center gap-3 p-2">
            {navLinks.map((link) => (
              <Link
                to={link.href}
                key={link.name}
                onClick={() => setIsOpen(false)}
                className={`border-b border-fwhite/10 px-4 py-4 font-montserrat text-lg transition-colors duration-300 ${
                  location.pathname === link.href
                    ? "text-light-yellow"
                    : "text-fwhite hover:text-basic"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
