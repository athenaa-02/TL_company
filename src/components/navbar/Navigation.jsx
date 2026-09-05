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
          className={`md:hidden absolute left-0 right-0 top-full border-b border-light-yellow/20 bg-heading px-5 py-6 shadow-2xl transition-[opacity,visibility,transform] duration-300 sm:px-8 ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <div className="flex justify-end">
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
