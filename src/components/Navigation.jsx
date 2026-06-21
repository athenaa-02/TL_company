import { useState } from "react";
import { href, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navigation() {
  const [isOpen, setIsOpnen] = useState(false)

  const navLinks = [
    {name: 'Home', href:'/'},
    {name: 'About us', href:'/about'},
    {name: 'Practice Areas', href:'/practice-areas'},
    {name: 'Blog', href:'/blog'},
    {name: 'Contact', href:'/contact'},
  ]
  return (<>
  <nav>
    
  </nav>
  </>)
}

export default Navigation;
