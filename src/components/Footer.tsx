"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Building2,
  Mail,
  Phone,
  MapPin,
  Award,
  ArrowRight,
  ArrowUpRight,
  PhoneCall,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0C2340] text-slate-300 relative">
      {/* Signature Yellow Ribbon Accent along top of footer */}
      <div className="h-[3.5px] bg-amber-400 w-full shadow-xs" />

      {/* Top Banner: Dual-Portfolio Switcher Bar */}
      <div className="bg-[#081B30] border-b border-slate-800 py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white text-xs sm:text-sm font-semibold">
                Explore Alternative Portfolio Perspectives
              </p>
              <p className="text-slate-400 text-[11px] sm:text-xs">
                Review our unified 45 non-life products structured by commercial market segment or technical risk discipline.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <Link
              href="/portfolio-by-market-segment"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors shadow-xs"
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Market Segment View</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
            <Link
              href="/portfolio-by-risk-category"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Risk Category View</span>
              <ArrowRight className="w-3 h-3 text-amber-400" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
          {/* Column 1 & 2: Company Profile & Logo */}
          <div className="lg:col-span-2 space-y-3.5">
            <div className="flex items-center">
              <Image
                src="/logos/logo-white.png"
                alt="Green Delta Insurance Company Limited"
                width={200}
                height={56}
                className="object-contain w-44 sm:w-52 h-auto"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-4">
              Green Delta Insurance Company Limited (GDIC) is Bangladesh&apos;s premier non-life insurance institution. Rated AAA by CRAB and certified with ISO 9001:2015, we safeguard industrial conglomerates, commercial enterprises, and individual policyholders with nationwide underwriting strength.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-amber-400/15 text-amber-300 border border-amber-400/30">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                AAA Credit Rating (CRAB)
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                ISO 9001:2015
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                IDRA Reg. 01/2000
              </span>
            </div>
          </div>

          {/* Column 3: Market Segments */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
              By Market Segment
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <Link
                  href="/portfolio-by-market-segment"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>Corporate Portfolio</span>
                  <span className="text-[11px] text-slate-500 font-mono font-bold">31</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio-by-market-segment"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>SME Commercial</span>
                  <span className="text-[11px] text-slate-500 font-mono font-bold">34</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio-by-market-segment"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>Retail / Personal</span>
                  <span className="text-[11px] text-slate-500 font-mono font-bold">21</span>
                </Link>
              </li>
              <li className="pt-1.5 border-t border-slate-800">
                <Link
                  href="/portfolio-by-market-segment"
                  className="text-amber-400 hover:underline font-semibold flex items-center gap-1 text-[11px]"
                >
                  <span>Explore 3 Market Segments &rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Top Risk Disciplines */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
              Risk Disciplines
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <Link
                  href="/portfolio-by-risk-category"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>Property & IAR</span>
                  <span className="text-[11px] text-slate-500 font-mono font-bold">8</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio-by-risk-category"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>Engineering</span>
                  <span className="text-[11px] text-slate-500 font-mono font-bold">8</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio-by-risk-category"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>Liability & Compliance</span>
                  <span className="text-[11px] text-slate-500 font-mono font-bold">5</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio-by-risk-category"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>Financial Protection</span>
                  <span className="text-[11px] text-slate-500 font-mono font-bold">5</span>
                </Link>
              </li>
              <li className="pt-1.5 border-t border-slate-800">
                <Link
                  href="/portfolio-by-risk-category"
                  className="text-amber-400 hover:underline font-semibold flex items-center gap-1 text-[11px]"
                >
                  <span>View All 9 Disciplines &rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Corporate Office & Hotline */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
              Corporate Office
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">
                  Green Delta AIMS Tower, 51-52 Mohakhali C/A, Dhaka-1212, Bangladesh
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-[11px] font-bold text-white">Hotline: 16457</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-[11px]">info@green-delta.com</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="tel:16457"
                className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 px-3 rounded-lg text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors shadow-xs"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Underwriting Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Regulatory Bar */}
        <div className="pt-8 mt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-[11px]">
            &copy; {new Date().getFullYear()} Green Delta Insurance Company Limited. All rights reserved.
          </p>
          <div className="text-[11px] text-slate-300">
            Concept by{" "}
            <a
              href="https://linkedin.com/in/ali-imranmehedi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2 transition-colors inline-flex items-center gap-1 group"
            >
              <span>Imran Mehedi</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
