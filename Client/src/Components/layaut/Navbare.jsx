import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { UseCars } from "../../Context/ContextProvider";
import { AdvancedImage } from "@cloudinary/react";
import { cld } from "../../lib/cloudinary";
import api from "../../api/axios";

export default function Navbare({connecter,username,setConnecter,setuser}) {
  const root = useRef(null);
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { bottomRef2 } = UseCars();
  const navigate = useNavigate();

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

 const handleLogout = async () => {
   try {
     await api.post("/users/logout"); 

     setConnecter(false);
     setuser(""); 
     navigate("/");

     // optionnel
     window.location.reload();
   } catch (err) {
     console.error("Logout failed:", err);
   }
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
            cldImg={cld.image("image-removebg_qyrdmh")}
            className="w-[150px] h-[70px]"
          />
        </NavLink>

        <div className="hidden lg:flex items-center gap-14 bg-gray-50/50 px-6 py-3 rounded-full border border-border-custom">
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
          {!connecter ? (
            <NavLink
              to="/login"
              className="text-primary text-xl border border-primary rounded-xl px-4 py-1 font-medium hover:underline underline-offset-4"
            >
              login
            </NavLink>
          ) : (
            <div className="relative group ml-auto">
              <AdvancedImage
                cldImg={cld.image("user_q1hjq5")}
                className="w-[30px] h-[30px] object-cover rounded-full cursor-pointer"
              />

              <div
                className="
      absolute -right-2 top-full mt-2 w-[180px]
      opacity-0 invisible translate-y-2
      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
      transition-all duration-200
      rounded-2xl border border-border-custom bg-white shadow-lg p-3
      z-50
    "
              >
                <p className="text-text-muted text-sm">
                  Hello, <span className="font-bold">{username}</span>
                </p>

                <button
                  onClick={handleLogout}
                  className="mt-2 w-full flex items-center gap-4 text-text-muted hover:text-primary hover:underline"
                >
                  <span>Log out</span>
                  <AdvancedImage
                    cldImg={cld.image("right-arrow_2_okh41o")}
                    className="w-[18px] h-[18px] object-cover"
                  />
                </button>
              </div>
            </div>
          )}

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
        <div className="flex flex-col p-6 gap-4 h-full">
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
          <div className="mt-12">
            <hr className="border-border-custom mb-4" />

            {!connecter ? (
              <NavLink
                to="/login"
                className="text-primary text-xl border border-primary rounded-xl px-4 py-1 font-medium hover:underline underline-offset-4"
              >
                login
              </NavLink>
            ) : (
              <div className="text-left space-y-1 flex gap-4 hover:gap-6  items-center">
                <p
                  onClick={handleLogout}
                  className=" text-text-muted text-xl hover:underline hover:text-primary cursor-pointer"
                >
                  log out
                </p>
                <AdvancedImage
                  cldImg={cld.image("right-arrow_2_okh41o")}
                  className="w-[20px] h-[20px] object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}




