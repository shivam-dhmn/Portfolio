// import React from 'react'

// const footer = () => {
//   return (
//     <>
//       <div className="logo bg-gray-900 p-6 flex text-white ">
//         <div>
//         <h1 className="text-2xl font-bold text-white">Shivam<span className="text-blue-500">.</span></h1>
//         <p className="text-slate-500 text-[14px] max-w-3xs">Building Fast, modern and Scalable web applications.</p>
//       </div>
//       <div className="Navigation_links max-h-1 flex flex-col gap-2 ml-10 ">
//         <h1 className="text-lg font-semibold text-white">Navigation</h1>
//         <ul className="flex flex-col  text-slate-500 text-[14px]">
//           <li><a href="#home">Home</a></li>
//           <li><a href="#projects">Projects</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#skills">Skills</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//       </div>
//       </div>
//     </>
//   )
// }

// export default footer

"use client";

import Link from "next/link";
import { ArrowUp, Heart, Mail } from "lucide-react";

export default function Footer() {
  const navigation = [
    { title: "Home", href: "#home" },
    { title: "Projects", href: "#projects" },
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Contact", href: "#contact" },
  ];

  const resources = [
    { title: "Resume", href: "/resume.pdf" },
    { title: "GitHub", href: "https://github.com/" },
    { title: "LinkedIn", href: "https://linkedin.com/" },
  ];

  const socials = [
    {
      icon: Mail,
      title: "shivam@example.com",
      href: "mailto:shivam@example.com",
    },
    {
      icon: Mail,
      title: "LinkedIn",
      href: "https://linkedin.com/",
    },
    {
      icon: Mail,
      title: "GitHub",
      href: "https://github.com/",
    },
  ];

  return (
    <footer className="border-t border-zinc-800 bg-[#080B14]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Logo */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              {/* Replace with your logo */}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 font-bold text-white">
                S
              </div>

              <h2 className="text-3xl font-bold text-white">
                Shivam<span className="text-blue-500">.</span>
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-7 text-zinc-400">
              Building fast, modern and scalable web applications.
            </p>
          </div>

          {/* Navigation */}

          <div className="space-y-5 border-l border-zinc-800 pl-8">
            <h3 className="font-semibold text-white">Navigation</h3>

            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 transition hover:text-blue-400"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}

          <div className="space-y-5 border-l border-zinc-800 pl-8">
            <h3 className="font-semibold text-white">Resources</h3>

            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 transition hover:text-blue-400"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}

          <div className="space-y-5 border-l border-zinc-800 pl-8">
            <h3 className="font-semibold text-white">Let's Connect</h3>

            <ul className="space-y-4">
              {socials.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 text-sm text-zinc-400 transition hover:text-blue-400"
                    >
                      <Icon size={16} />

                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Copyright */}

          <div className="flex flex-col justify-between border-l border-zinc-800 pl-8">
            <div>
              <p className="flex items-center gap-2 text-sm text-zinc-400">
                Made with
                <Heart size={15} className="fill-red-500 text-red-500" />
                by Shivam
              </p>

              <p className="mt-3 text-sm text-zinc-500">
                © 2026 All rights reserved.
              </p>
            </div>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="mt-8 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 transition hover:border-blue-500 hover:bg-blue-500"
            >
              <ArrowUp size={18} color="white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
