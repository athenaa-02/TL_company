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
        <div className="md:flex"></div>

        {/* mobile navigation */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none "
        >
          <Menu size={28} />
        </button>
        {/* mobile menu */}
        <div
          className={`fixed insert-y-0 right-0 w-1/2 h-10 bg-primary-red shadow-xl smooth_transition ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
<button onClick={() =>setIsOpen(!isOpen)}>
    <X size={28}/>
</button>

        </div>
      </nav>
    </>
  );
}

export default Navigation;
