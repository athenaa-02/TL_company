import { useEffect, useState } from "react";

const socialLinks = [
  {
    name: "Facebook",
    label: "f",
    href: "https://www.facebook.com/profile.php?id=100079176007174",
  },
  { name: "LinkedIn", label: "in", href: "https://www.linkedin.com/" },
  {
    name: "Instagram",
    label: "i",
    href: "https://www.instagram.com/tielawyerscompany/",
  },
];

const RAIL_HEIGHT = 134;
const SCROLL_THRESHOLD = 500;

function SocialRail() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const remainingScroll =
        document.documentElement.scrollHeight -
        window.innerHeight -
        window.scrollY;

      setIsVisible(
        window.scrollY >= SCROLL_THRESHOLD &&
          remainingScroll > SCROLL_THRESHOLD,
      );
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <aside
      className={`group fixed -right-12 bottom-2 z-40 flex w-10 flex-col overflow-hidden bg-accent transition-[all,width] duration-500 ease-out hover:w-12 focus-within:w-12 ${
        isVisible ? "right-0" : "-right-12"
      }`}
      style={{
        height: `${RAIL_HEIGHT}px`,
      }}
      aria-label="Social media links"
    >
      {socialLinks.map((socialLink) => (
        <a
          key={socialLink.name}
          href={socialLink.href}
          target="_blank"
          rel="noreferrer"
          aria-label={socialLink.name}
          className="flex flex-1 items-center justify-center text-xl font-semibold leading-none text-white transition-[font-size,background-color] duration-300 group-hover:text-2xl group-focus-within:text-xl hover:bg-heading"
        >
          <span aria-hidden="true">{socialLink.label}</span>
        </a>
      ))}
    </aside>
  );
}

export default SocialRail;
