import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaBox,
  FaServicestack,
  FaEnvelope,
  FaBriefcase
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";



const TopNavbar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  // NavLinks (path + name + icon)
  const navLinks = [
    { path: "/", name: "Home", icon: <FaHome size={20} /> },
    { path: "/about", name: "About", icon: <FaInfoCircle size={20} /> },
    { path: "/products", name: "Product", icon: <FaBox size={20} /> },
    { path: "/contact", name: "Contact", icon: <FaEnvelope size={20} /> },
  ];

  // Auto set active from URL
 useEffect(() => {
    const current = navLinks.find((l) => l.path === location.pathname);
    if (current) setActive(current.name);

    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]); 
  // Close on outside click + scroll
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    const handleScroll = () => setMenuOpen(false);

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (
    <div
      ref={menuRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-2xl w-[95%] md:w-[700px] lg:w-[900px] h-16 flex items-center justify-between px-6 z-50"
    >
      {/* Logo */}
     <div className="flex items-center gap-3 group cursor-pointer" onClick={() => navigate("/")}>
  {/* Logo Image Container */}
  <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden rounded-xl bg-slate-900 shadow-lg border border-[#B8860B]/30 group-hover:border-[#B8860B] transition-all duration-300">
    <img 
      src="/logo.png" 
      loading="lazy"
      alt="Naina Foods Logo" 
      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
    />
    {/* Subtle Shine Effect on Hover */}
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
  </div>

  {/* Logo Text */}
  <div className="flex flex-col">
    <span className="font-sans text-2xl font-black tracking-tighter leading-none bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] bg-[length:200%_auto] hover:bg-right text-transparent bg-clip-text transition-all duration-1000">
      Naina
    </span>
    <span className="text-[10px] tracking-[0.3em] font-bold text-slate-500 uppercase leading-none mt-1">
      Foods
    </span>
  </div>
</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setActive(link.name)}
            className="relative flex flex-col items-center cursor-pointer group"
          >
            {/* Bubble + Cutout */}
            {active === link.name && (
              <>
                <div className="absolute -top-6 w-12 h-12 rounded-full bg-[var(--secondary)] text-[var(--primary)] flex items-center justify-center shadow-lg z-20">
                  {link.icon}
                </div>
                <div className="absolute top-0 w-14 h-7 bg-white rounded-b-full z-10"></div>
              </>
            )}

            {/* Icon + Text */}
            <div
              className={`flex flex-col items-center text-xs transition-all duration-300 ${
                active === link.name
                  ? "text-[var(--primary)] font-semibold mt-6"
                  : "text-[var(--text-dark)] group-hover:text-[var(--primary)]"
              }`}
            >
              {active !== link.name && <div className="mb-1">{link.icon}</div>}
              <span>{link.name}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        {menuOpen ? (
          <IoMdClose
            size={28}
            className="text-[var(--primary)] cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <GiHamburgerMenu
            size={28}
            className="text-[var(--primary)] cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg rounded-b-2xl flex flex-col items-center py-4 md:hidden z-40">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => {
                setActive(link.name);
                setMenuOpen(false);
              }}
              className={`py-2 w-full text-center cursor-pointer transition ${
                active === link.name
                  ? "bg-[var(--secondary)] text-[var(--accent)]"
                  : "hover:bg-[var(--secondary)] hover:text-[var(--accent)]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopNavbar;