import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaChevronRight,
} from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contact" },
  ];

  const productCategories = [
    { name: "Roasted Vermicelli", path: "/products" },
    { name: "Premium Pasta", path: "/products" },
    { name: "Healthy Seviyan", path: "/products" },
    { name: "Hakka Noodles", path: "/products" },
  ];

  return (
    <footer className="relative bg-[var(--secondary)] text-gray-200 font-sans overflow-hidden border-t border-[var(--border)]">
      {/* Top Gradient Line */}
      <div className="h-1 w-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)]"></div>

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Identity */}
          <div className="space-y-5">
            <h2 className="text-3xl font-black tracking-tight text-[var(--text-light)] uppercase">
              Naina<span className="text-[var(--primary)]">Foods</span>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Bringing authentic taste and premium quality to your kitchen. We promise 100% purity and health in every pack.
            </p>
            <div className="flex space-x-3 pt-1">
              {[
                { icon: FaFacebookF, link: "#" },
                { icon: FaInstagram, link: "#" },
                { icon: FaTwitter, link: "#" },
                { icon: FaLinkedinIn, link: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  className="w-9 h-9 rounded-full bg-[var(--secondary-light)] flex items-center justify-center hover:bg-[var(--primary)] text-[var(--text-light)] transition-all duration-300 shadow-sm"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[var(--text-light)] font-bold uppercase tracking-widest text-sm mb-6 border-l-4 border-[var(--primary)] pl-3">
              Explore
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-sm hover:text-[var(--primary)] transition-colors"
                  >
                    <FaChevronRight className="text-[10px] mr-2 text-[var(--primary)] transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Ranges */}
          <div>
            <h3 className="text-[var(--text-light)] font-bold uppercase tracking-widest text-sm mb-6 border-l-4 border-[var(--primary)] pl-3">
              Our Ranges
            </h3>
            <ul className="space-y-3">
              {productCategories.map((cat, i) => (
                <li key={i}>
                  <Link
                    to={cat.path}
                    className="group flex items-center text-sm hover:text-[var(--primary)] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full mr-3 opacity-50 group-hover:opacity-100"></span>
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-[var(--text-light)] font-bold uppercase tracking-widest text-sm mb-6 border-l-4 border-[var(--primary)] pl-3">
              Contact
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[var(--primary)] mt-1 flex-shrink-0" />
                <p className="text-gray-300">123 Industrial Estate, Phase 2, Nashik, MH</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[var(--primary)] flex-shrink-0" />
                <p className="text-gray-300">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[var(--primary)] flex-shrink-0" />
                <p className="text-gray-300">info@nainafoods.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-[var(--secondary-light)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wide text-gray-400">
          <p>© {new Date().getFullYear()} Naina Food Products. All Rights Reserved.</p>
          
          <div className="flex items-center gap-1">
            <span className="uppercase text-[10px] opacity-60">Crafted by</span>
            <a
              href="https://vaishnavikolhe.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary)] font-bold hover:text-[var(--text-light)] transition-colors underline underline-offset-4 decoration-slate-700"
            >
              Vaishnavi Kolhe
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}