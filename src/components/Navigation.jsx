import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
            {
                navLinks.map((link) =>(
                    <Link to={link.href} className="min-w-fit">{link.name} </Link>
                ))
            }
        </div>

        {/* mobile navigation */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none "
        >
          <Menu size={28} />
        </button>
        {/* mobile menu */}
        <div
          className={`p-5 fixed top-0 right-0 w-1/2 h-screen bg-secondary-red shadow-xl smooth_transition ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end ">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <X size={28} />
            </button>
          </div>
          <div className="p-2 flex flex-col h-full items-center justify-around">
            {navLinks.map((link) => (
              <Link
                to={link.href}
                key={link.name}
                onClick={() => setIsOpen(false)}
                className="text-white font-light"
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
