"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence,motion } from "framer-motion";
import Image from "next/image";
import logo from "../public/images/fulllogo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="premium-header sticky top-0 z-[100] border-b border-gray-700 bg-gray-900/90 text-gray-300 backdrop-blur-xl">
      <motion.nav
        initial={{
          opacity: 0,
          y: -30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="mx-auto hidden max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:flex lg:px-8"
      >
         <Image
          src={logo}
          alt="Logo"
          width={128}
          height={128}
        />
        

        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="premium-nav-link text-sm font-medium transition duration-300 hover:text-blue-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/919896508141?text=Hi%20Shivam,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="premium-cta rounded bg-blue-500 px-4 py-2 font-bold text-white transition duration-300 ease-in-out hover:bg-blue-700"
        >
          Let&apos;s Work Together
        </a>
      </motion.nav>

      <details className="group md:hidden">
        <summary className="mx-auto flex max-w-7xl cursor-pointer list-none items-center justify-between px-4 py-4 sm:px-6 [&::-webkit-details-marker]:hidden">
          <span className="text-xl font-bold text-white">
            Shivam<span className="text-blue-400">.</span>
          </span>
          <span
            aria-label="Toggle navigation menu"
            className="premium-menu-button relative inline-grid size-10 place-items-center rounded border border-gray-700 text-white transition hover:border-blue-400 hover:text-blue-300"
          >
            <Menu
              className="absolute transition duration-200 group-open:rotate-90 group-open:scale-75 group-open:opacity-0"
              size={22}
            />
            <X
              className="absolute scale-75 opacity-0 transition duration-200 group-open:rotate-90 group-open:scale-100 group-open:opacity-100"
              size={22}
            />
          </span>
        </summary>

        <div
          id="mobile-navigation"
          className="premium-mobile-menu absolute w-full border-t border-gray-800 bg-gray-900/95  px-4 pb-5 pt-2 shadow-2xl shadow-black/30 backdrop-blur-xl md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                style={{ animationDelay: `${index * 45}ms` }}
                className="premium-mobile-link rounded px-3 py-3 text-base font-medium transition duration-200 hover:translate-x-1 hover:bg-gray-800 hover:text-blue-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/919896508141?text=Hi%20Shivam,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${navLinks.length * 45}ms` }}
              className="premium-mobile-link premium-cta mt-2 rounded bg-blue-500 px-4 py-3 text-center font-bold text-white transition hover:bg-blue-700"
            >
              Let&apos;s Work Together
            </a>
          </div>
        </div>
      </details>
    </header>
  );
}
