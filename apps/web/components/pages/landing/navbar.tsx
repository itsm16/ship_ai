"use client";

import { useState } from "react";

const navLinks = [
  { label: "Platform", href: "#", active: true },
  { label: "Workflow", href: "#" },
  { label: "Network", href: "#" },
  { label: "Pricing", href: "#" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="flex justify-between items-center h-16 px-[var(--margin-desktop,32px)] max-w-[var(--container-max,1440px)] mx-auto">
        <div className="flex items-center gap-8">
          <span className="text-[24px] font-semibold leading-[32px] tracking-tighter text-white">
            SHIP_AI
          </span>
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[14px] font-medium leading-[20px] tracking-[0.02em] transition-colors duration-200 ${
                  link.active
                    ? "text-[#FFB4AC] border-b-2 border-[#FFB4AC] pb-1"
                    : "text-[#d7c2bf] hover:text-[#FFB4AC]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden sm:inline text-[14px] font-medium leading-[20px] tracking-[0.02em] text-white hover:text-[#FFB4AC] transition-colors"
          >
            Docs
          </a>
          <button className="bg-[#FFB4AC] text-black px-6 py-2 text-[14px] font-medium leading-[20px] tracking-[0.02em] font-bold active:scale-95 transition-transform rounded-lg">
            Deploy Now
          </button>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-black px-[var(--margin-mobile,16px)] pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`block py-2 text-[14px] font-medium leading-[20px] tracking-[0.02em] ${
                link.active
                  ? "text-[#FFB4AC]"
                  : "text-[#d7c2bf] hover:text-[#FFB4AC]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="block py-2 text-[14px] font-medium leading-[20px] tracking-[0.02em] text-white hover:text-[#FFB4AC]"
          >
            Docs
          </a>
        </div>
      )}
    </nav>
  );
}