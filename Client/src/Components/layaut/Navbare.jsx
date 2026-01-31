import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { UseCars } from "../../Context/ContextProvider";
import { AdvancedImage } from "@cloudinary/react";
import { cld } from "../../lib/cloudinary";

export default function Navbare() {
  const image1 = cld.image("image-removebg_qyrdmh");
  const root = useRef(null);
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { bottomRef2 } = UseCars();
  const navigate = useNavigate();

  const [connecter] = useState(false);

  // Animation GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-content", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  // Fermer le menu quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest('button[aria-label="Toggle menu"]')
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // Close menu
  const closeMenu = () => setIsOpen(false);

  // Links
  const navLinks = [
    { name: "News Cars", to: "/newsCars" },
    { name: "Electric Cars", to: "/electric" },
    { name: "Famous_Cars", to: "/vehicles" },
  ];

  const goToPage = (linkTo) => {
    if (linkTo === "/vehicles") {
      bottomRef2.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate(linkTo);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <header
      ref={root}
      className="sticky top-0 left-0 w-full z-[1001]
      backdrop-blur-md bg-surface/90 border-b border-border-custom shadow-sm"
    >
      <nav className="nav-content max-w-7xl mx-auto px-4 md:px-8 h-[62px] flex items-center justify-between">
        <NavLink
          to="/"
          onClick={closeMenu}
          className="tracking-tighter flex items-center"
        >
           <AdvancedImage
                  cldImg={image1}
                   className="w-[150px] h-[70px]"
                />
        </NavLink>

        <div className="hidden lg:flex items-center gap-8 bg-gray-50/50 px-6 py-3 rounded-full border border-border-custom">
          {navLinks.map((link) => (
            <button
              key={link.to}
              onClick={() => goToPage(link.to)}
              className="text-sm font-bold transition-all duration-300 text-text-muted hover:text-primary hover:scale-105"
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <NavLink
            to="/login"
            className="hidden md:block bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl font-bold shadow-md shadow-primary/20 transition active:scale-95"
          >
            Sign in
          </NavLink>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="lg:hidden flex flex-col gap-1.5 items-center justify-center w-11 h-11 rounded-xl border border-border-custom bg-surface hover:bg-surface-hover transition"
          >
            <div
              className={`w-6 h-0.5 bg-text transition-all ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-text transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-text transition-all ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* OVERLAY (click outside closes menu) */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="lg:hidden fixed inset-0 top-[62px] bg-black/30 z-[1000] backdrop-blur-sm"
        />
      )}

      {/* MOBILE MENU */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed top-[62px] right-0 
        h-[500px]
        w-1/2 min-w-[240px] max-w-[360px]
        bg-surface border-l border-border-custom shadow-xl z-[1001]
        transition-transform duration-300 ease-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col p-6 gap-6 h-full">
          {/* Header */}
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-text">Menu</p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.to}
                onClick={() => goToPage(link.to)}
                className="text-lg font-bold transition text-text hover:text-primary text-left"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Bottom */}
          <div className="mt-auto">
            <hr className="border-border-custom mb-4" />

            {!connecter ? (
              <NavLink
                to="/login"
                onClick={closeMenu}
                className="block text-center bg-primary hover:bg-primary-hover text-white py-3 rounded-2xl font-bold"
              >
                Sign in
              </NavLink>
            ) : (
              <div className="rounded-2xl border border-border-custom bg-surface-hover p-4">
                <p className="text-xs uppercase tracking-widest text-text-muted font-bold">
                  Welcome
                </p>
                <p className="text-sm font-bold text-primary">User</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
