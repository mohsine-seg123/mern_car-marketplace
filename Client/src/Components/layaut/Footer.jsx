import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaFacebookF size={18} />,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: <FaTwitter size={18} />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <FaInstagram size={18} />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: <FaLinkedinIn size={18} />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <FaYoutube size={20} />,
      href: "https://youtube.com",
      label: "YouTube",
    },
  ];

  return (
    <footer className="mt-20 border-t border-border-custom bg-[#1a1f1f]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-12 grid-cols-2 lg:grid-cols-4">
          {/* Section 1: Brand & Bio */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-xl font-black text-white tracking-tighter flex items-center gap-2">
<<<<<<< HEAD
=======
        
>>>>>>> 6f3f9fe (after add dashbord)
              NeoDrive
            </h3>
            <p className="mt-4 text-sm leading-6 text-gray-400">
              Découvrez et gérez votre collection de voitures facilement. La
              plateforme de référence pour les passionnés d'automobile.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/20"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Section 2: Navigation Rapide */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              {["Accueil", "Catalogue", "Mes Annonces", "Favoris"].map(
                (item) => (
                  <li key={item}>
                    <NavLink
                      to={
                        item === "Accueil"
                          ? "/"
                          : `/${item.toLowerCase().replace(" ", "-")}`
                      }
                      className="transition hover:text-blue-400 flex items-center gap-2 group"
                    >
                      <span className="h-px w-0 bg-blue-400 transition-all group-hover:w-3"></span>
                      {item}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Section 3: Support */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">
              Support
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <NavLink
                  to="/contact"
                  className="hover:text-blue-400 transition"
                >
                  Nous contacter
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" className="hover:text-blue-400 transition">
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms" className="hover:text-blue-400 transition">
                  Conditions d'utilisation
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Section 4: Contact Direct */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">
              Contact
            </h4>
            <div className="mt-4 space-y-4 text-sm text-gray-400">
              <p className="flex items-center gap-3 group">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  📞
                </span>
                <span>+212 6 15683217</span>
              </p>
              <p className="flex items-center gap-3 group">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  ✉️
                </span>
                <span className="break-all">mohsinesegaoui@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            Copyright {new Date().getFullYear()} ©{" "}
            <span className="text-gray-300 font-medium">
              NeoDrive Platform
            </span>
            .
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition">
              Confidentialité
            </a>
            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
