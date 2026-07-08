"use client";

import Link from "next/link";
import { ArrowUp, ExternalLink, FolderGit2, Mail } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/la-whatsapp";

export default function Footer() {
  const navigation = [
    { title: "Home", href: "#home" },
    { title: "Projects", href: "#projects" },
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Contact", href: "#contact" },
  ];

  const contactLinks = [
    {
      icon: Mail,
      label: "shivam@example.com",
      href: "mailto:shivam@example.com",
    },
    {
      icon: WhatsappIcon,
      label: "WhatsApp",
      href: "https://wa.me/919896508141?text=Hi%20Shivam,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
      newTab: true,
    },
    {
      icon: FolderGit2,
      label: "GitHub",
      href: "https://github.com/shivam-dhmn",
      newTab: true,
    },
  ];

  return (
    <footer className="border-t border-zinc-800 bg-[#080B14] text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr_1fr] lg:gap-12">
          <div className="max-w-md">
            <Link href="#home" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-950/30">
                S
              </span>
              <span className="text-2xl font-bold text-white">
                Shivam<span className="text-blue-500">.</span>
              </span>
            </Link>

            <p className="mt-5 text-sm leading-7">
              Frontend developer building fast, modern and scalable web
              applications with clean interfaces and reliable user experiences.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    rel={item.newTab ? "noopener noreferrer" : undefined}
                    target={item.newTab ? "_blank" : undefined}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/70 text-zinc-300 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Explore
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-3 sm:max-w-sm lg:grid-cols-1">
              {navigation.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-9 items-center text-sm transition hover:text-blue-400"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Start a Project
            </h2>
            <p className="mt-5 text-sm leading-7">
              Have an idea ready? Send a message and I&apos;ll get back to you
              with the next steps.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="https://wa.me/919896508141?text=Hi%20Shivam,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                WhatsApp Me
                <ExternalLink size={16} />
              </Link>
              <Link
                href="mailto:shivam@example.com"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-zinc-800 px-5 py-3 text-sm font-semibold text-white transition hover:border-blue-500 hover:text-blue-400"
              >
                Send Email
                <Mail size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-zinc-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-500">
            © 2026 Shivam. All rights reserved.
          </p>

          <button
            type="button"
            aria-label="Scroll back to top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-white transition hover:border-blue-500 hover:bg-blue-600"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}

