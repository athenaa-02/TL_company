import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import IconButton from "./IconButton";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <>
      <nav>
        {/* desktop navigation */}
        <div className="hidden md:flex md:gap-6">
          {navLinks.map((link) => (
            <Link
              to={link.href}
              key={link.name}
              className="min-w-fit text-fwhite link-hover hover:scale-105 transition-transform duration-300"
            >
              {link.name}{" "}
            </Link>
          ))}
        </div>

        {/* mobile navigation */}

        <IconButton onClick={() => setIsOpen(!isOpen)}>
          <Menu size={28} />
        </IconButton>
        {/* mobile menu */}
        <div
          className={`md:hidden p-5 fixed top-0 right-0 w-1/2 h-screen bg-secondary-red shadow-xl smooth_transition ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end ">
            <IconButton onClick={() => setIsOpen(!isOpen)}>
              <X size={28} />
            </IconButton>
          </div>
          <div className="p-2 flex flex-col h-full items-center justify-around">
            {navLinks.map((link) => (
              <Link
                to={link.href}
                key={link.name}
                onClick={() => setIsOpen(false)}
                className="text-fwhite font-light"
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
