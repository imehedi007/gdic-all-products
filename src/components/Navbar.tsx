"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ShieldCheck,
  Menu,
  X,
  ArrowRightLeft,
  Building,
  PhoneCall,
  Search,
  Home,
  Moon,
  Globe,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isMarketSegment = pathname === "/portfolio-by-market-segment";
  const isRiskCategory = pathname === "/portfolio-by-risk-category";
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0C2340] shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Green Delta Insurance Company Home"
          >
            <div className="flex items-center transition-transform group-hover:scale-[1.02]">
              <Image
                src="/logos/logo-white.png"
                alt="Green Delta Insurance Company"
                width={200}
                height={56}
                priority
                className="object-contain w-38 sm:w-48 h-auto"
              />
            </div>
            <div className="hidden xl:block pl-3 border-l border-slate-700 text-xs text-slate-400 font-medium">
              Product Portfolio
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            <Link
              href="/"
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs lg:text-sm font-semibold transition-all ${
                isHome
                  ? "bg-white/15 text-amber-400 border border-amber-400/40 shadow-xs"
                  : "text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              <Home className={`w-4 h-4 ${isHome ? "text-amber-400" : "text-slate-400"}`} />
              <span>Home</span>
            </Link>

            <Link
              href="/portfolio-by-market-segment"
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs lg:text-sm font-semibold transition-all ${
                isMarketSegment
                  ? "bg-white/15 text-amber-400 border border-amber-400/40 shadow-xs"
                  : "text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              <Building className={`w-4 h-4 ${isMarketSegment ? "text-amber-400" : "text-slate-400"}`} />
              <span>By Market Segment</span>
              <span
                className={`ml-0.5 px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                  isMarketSegment
                    ? "bg-amber-400 text-slate-950"
                    : "bg-slate-800 text-slate-300"
                }`}
              >
                3
              </span>
            </Link>

            <Link
              href="/portfolio-by-risk-category"
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs lg:text-sm font-semibold transition-all ${
                isRiskCategory
                  ? "bg-white/15 text-amber-400 border border-amber-400/40 shadow-xs"
                  : "text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              <ShieldCheck className={`w-4 h-4 ${isRiskCategory ? "text-amber-400" : "text-slate-400"}`} />
              <span>By Risk Category</span>
              <span
                className={`ml-0.5 px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                  isRiskCategory
                    ? "bg-amber-400 text-slate-950"
                    : "bg-slate-800 text-slate-300"
                }`}
              >
                9
              </span>
            </Link>
          </nav>

          {/* Right Action Icons & Utilities (matching Brand Style) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Quick Switcher Pill */}
            {isMarketSegment && (
              <Link
                href="/portfolio-by-risk-category"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-slate-200 hover:bg-amber-400 hover:text-slate-950 transition-all border border-white/20"
              >
                <ArrowRightLeft className="w-3.5 h-3.5" />
                <span>Risk Categories</span>
              </Link>
            )}
            {isRiskCategory && (
              <Link
                href="/portfolio-by-market-segment"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-slate-200 hover:bg-amber-400 hover:text-slate-950 transition-all border border-white/20"
              >
                <ArrowRightLeft className="w-3.5 h-3.5" />
                <span>Market Segments</span>
              </Link>
            )}

            {/* Utility Icons */}
            <div className="flex items-center gap-2.5 pl-2 border-l border-slate-700 text-slate-300">
              <a
                href="tel:16457"
                title="Call 16457 Hotline"
                className="p-1.5 rounded-full hover:bg-white/10 hover:text-amber-400 transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
              </a>

              <span
                title="Active Theme"
                className="p-1.5 rounded-full hover:bg-white/10 hover:text-amber-400 transition-colors cursor-pointer"
              >
                <Moon className="w-4 h-4 text-slate-300" />
              </span>

              {/* Language Pill (Yellow Accent) */}
              <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-amber-400 text-amber-400 text-xs font-bold tracking-wide">
                <Globe className="w-3 h-3 text-amber-400" />
                <span>EN</span>
              </div>
            </div>

            {/* Hotline CTA */}
            <a
              href="tel:16457"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors shadow-xs"
            >
              <span>16457</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full border border-amber-400 text-amber-400 text-[11px] font-bold">
              <Globe className="w-2.5 h-2.5 text-amber-400" />
              <span>EN</span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-amber-400" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Signature Yellow Ribbon Accent Bar */}
      <div className="h-[3.5px] bg-amber-400 w-full shadow-xs" />

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0C2340] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-sm font-semibold ${
              isHome
                ? "bg-white/15 text-amber-400 border border-amber-400/40"
                : "text-slate-200 hover:bg-white/10"
            }`}
          >
            <Home className="w-4 h-4 text-amber-400" />
            <span>Home</span>
          </Link>
          <Link
            href="/portfolio-by-market-segment"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold ${
              isMarketSegment
                ? "bg-white/15 text-amber-400 border border-amber-400/40"
                : "text-slate-200 hover:bg-white/10"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Building className="w-4 h-4 text-amber-400" />
              <span>By Market Segment</span>
            </div>
            <span className="text-xs px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-bold">
              3 Segments
            </span>
          </Link>
          <Link
            href="/portfolio-by-risk-category"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold ${
              isRiskCategory
                ? "bg-white/15 text-amber-400 border border-amber-400/40"
                : "text-slate-200 hover:bg-white/10"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>By Risk Category</span>
            </div>
            <span className="text-xs px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-bold">
              9 Disciplines
            </span>
          </Link>

          <div className="pt-2 border-t border-slate-700/80">
            <a
              href="tel:16457"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors shadow-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Hotline 16457 / Underwriting Desk</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
