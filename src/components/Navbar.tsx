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
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isMarketSegment = pathname === "/portfolio-by-market-segment";
  const isRiskCategory = pathname === "/portfolio-by-risk-category";
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Green Delta Insurance Company Home"
          >
            <div className="flex items-center transition-transform group-hover:scale-[1.02]">
              <Image
                src="/logos/logo-green.png"
                alt="Green Delta Insurance Company"
                width={200}
                height={56}
                priority
                className="object-contain w-40 sm:w-48 h-auto"
              />
            </div>
            <div className="hidden xl:block pl-3 border-l border-slate-200 text-xs text-slate-500 font-medium">
              Product Portfolio
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                isHome
                  ? "bg-slate-100 text-slate-900 font-semibold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/portfolio-by-market-segment"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isMarketSegment
                  ? "bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200 shadow-xs"
                  : "text-slate-600 hover:text-emerald-700 hover:bg-slate-50"
              }`}
            >
              <Building className="w-4 h-4 text-emerald-600" />
              <span>By Market Segment</span>
              <span className="ml-1 px-1.5 py-0.5 text-[11px] font-semibold bg-emerald-100 text-emerald-800 rounded-full">
                3
              </span>
            </Link>

            <Link
              href="/portfolio-by-risk-category"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isRiskCategory
                  ? "bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200 shadow-xs"
                  : "text-slate-600 hover:text-emerald-700 hover:bg-slate-50"
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>By Risk Category</span>
              <span className="ml-1 px-1.5 py-0.5 text-[11px] font-semibold bg-emerald-100 text-emerald-800 rounded-full">
                9
              </span>
            </Link>
          </nav>

          {/* Action Button: Quick View Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            {isMarketSegment && (
              <Link
                href="/portfolio-by-risk-category"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-emerald-600 hover:text-white transition-all shadow-xs border border-slate-200"
              >
                <ArrowRightLeft className="w-3.5 h-3.5" />
                <span>Switch to Risk Categories</span>
              </Link>
            )}
            {isRiskCategory && (
              <Link
                href="/portfolio-by-market-segment"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-emerald-600 hover:text-white transition-all shadow-xs border border-slate-200"
              >
                <ArrowRightLeft className="w-3.5 h-3.5" />
                <span>Switch to Market Segments</span>
              </Link>
            )}
            <a
              href="tel:+8809613444888"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-700 text-white hover:bg-emerald-800 transition-colors shadow-xs"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>16457 / Hotline</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-lg text-base font-medium ${
              isHome
                ? "bg-slate-100 text-slate-900 font-semibold"
                : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            Home
          </Link>
          <Link
            href="/portfolio-by-market-segment"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-base font-medium ${
              isMarketSegment
                ? "bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200"
                : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Building className="w-4 h-4 text-emerald-600" />
              <span>By Market Segment</span>
            </div>
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
              31 / 34 / 21
            </span>
          </Link>
          <Link
            href="/portfolio-by-risk-category"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-base font-medium ${
              isRiskCategory
                ? "bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200"
                : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>By Risk Category</span>
            </div>
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
              9 Disciplines
            </span>
          </Link>

          <div className="pt-2 border-t border-slate-100">
            <a
              href="tel:+8809613444888"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold bg-emerald-700 text-white hover:bg-emerald-800"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Hotline: 16457</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
