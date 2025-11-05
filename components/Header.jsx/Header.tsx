import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { getCategories } from "../../services";

const Header = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <Link href="/" className="group">
          <span className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-orange-500 to-amber-500 transition-all group-hover:brightness-110">
            Grant Kyle
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-slate-700 text-sm font-medium">
          <NavLink href="#about" label="About" />
          <NavLink href="#work" label="Work" />
          <NavLink href="#values" label="Values" />
          <NavLink href="#contact" label="Contact" />
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
        >
          <span
            className={`block h-0.5 w-6 bg-slate-800 rounded-sm transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-0.5"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-slate-800 rounded-sm transition-all duration-300 my-1 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-slate-800 rounded-sm transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0.5"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full bg-white border-t border-slate-200 shadow-md md:hidden"
          >
            <div className="flex flex-col items-center py-4 space-y-4 text-slate-800 text-base font-medium">
              <Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-pink-500 transition">
                About
              </Link>
              <Link href="#work" onClick={() => setIsOpen(false)} className="hover:text-orange-500 transition">
                Work
              </Link>
              <Link href="#values" onClick={() => setIsOpen(false)} className="hover:text-amber-500 transition">
                Values
              </Link>
              <Link href="#contact" onClick={() => setIsOpen(false)} className="hover:text-pink-500 transition">
                Contact
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

// Animated underline link component
const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="group relative">
    <span>{label}</span>
    <span className="absolute left-0 bottom-[-3px] h-[2px] w-0 bg-gradient-to-r from-pink-500 to-orange-400 transition-all duration-300 group-hover:w-full" />
  </Link>
);

export default Header;
