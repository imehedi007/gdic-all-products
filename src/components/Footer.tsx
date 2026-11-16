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
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top Banner: Dual-Portfolio Switcher Bar */}
      <div className="bg-emerald-950/80 border-b border-emerald-900/50 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-700/40 flex items-center justify-center text-emerald-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">
                Looking for alternative portfolio perspectives?
              </p>
              <p className="text-emerald-300/80 text-xs">
                Explore our unified 45 products structured either by commercial client segment or technical peril discipline.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/portfolio-by-market-segment"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-800 text-white hover:bg-emerald-700 transition-colors border border-emerald-600/40"
            >
              <Building2 className="w-3.5 h-3.5 text-emerald-300" />
              <span>Market Segment View</span>
              <ArrowRight className="w-3 h-3 text-emerald-300" />
            </Link>
            <Link
              href="/portfolio-by-risk-category"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-800 text-white hover:bg-emerald-700 transition-colors border border-emerald-600/40"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              <span>Risk Category View</span>
              <ArrowRight className="w-3 h-3 text-emerald-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1 & 2: Company Profile & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <Image
                src="/logos/logo-white.png"
                alt="Green Delta Insurance Company Limited"
                width={200}
                height={56}
                className="object-contain w-44 sm:w-52 h-auto"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Green Delta Insurance Company Limited (GDIC) is the premier non-life insurance institution in Bangladesh. For over 35 years, we have championed financial resilience with AAA credit ratings, pioneer microinsurance, and comprehensive enterprise risk management.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-800 text-emerald-400 border border-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                AAA Credit Rating (CRAB)
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                ISO 9001:2015 Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                IDRA Licensed
              </span>
            </div>
          </div>

          {/* Column 3: Market Segments */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              By Market Segment
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link
                  href="/portfolio-by-market-segment?segment=Corporate"
                  className="hover:text-emerald-400 transition-colors flex items-center justify-between"
                >
                  <span>Corporate Portfolio</span>
                  <span className="text-xs text-slate-500 font-mono">31</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio-by-market-segment?segment=SME"
                  className="hover:text-emerald-400 transition-colors flex items-center justify-between"
                >
                  <span>SME Commercial</span>
                  <span className="text-xs text-slate-500 font-mono">34</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio-by-market-segment?segment=Retail%20%2F%20Personal"
                  className="hover:text-emerald-400 transition-colors flex items-center justify-between"
                >
                  <span>Retail / Personal</span>
                  <span className="text-xs text-slate-500 font-mono">21</span>
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-800 text-xs text-slate-500">
                Total Multi-Market Deployments: 86
              </li>
            </ul>
          </div>

          {/* Column 4: Key Risk Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Risk Disciplines
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link
                  href="/portfolio-by-risk-category?category=Engineering"
                  className="hover:text-emerald-400 transition-colors flex items-center justify-between"
                >
                  <span>Engineering</span>
                  <span className="text-xs text-slate-500 font-mono">8</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio-by-risk-category?category=Property"
                  className="hover:text-emerald-400 transition-colors flex items-center justify-between"
                >
                  <span>Property & IAR</span>
                  <span className="text-xs text-slate-500 font-mono">8</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio-by-risk-category?category=Personal%20Accident%20%26%20Health"
                  className="hover:text-emerald-400 transition-colors flex items-center justify-between"
                >
                  <span>Personal Accident & Health</span>
                  <span className="text-xs text-slate-500 font-mono">8</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio-by-risk-category?category=Financial%20Protection"
                  className="hover:text-emerald-400 transition-colors flex items-center justify-between"
                >
                  <span>Financial Protection</span>
                  <span className="text-xs text-slate-500 font-mono">5</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio-by-risk-category?category=Liability"
                  className="hover:text-emerald-400 transition-colors flex items-center justify-between"
                >
                  <span>Liability</span>
                  <span className="text-xs text-slate-500 font-mono">5</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact & Head Office */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Headquarters
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  Green Delta AIMS Tower (6th Floor), 51-52 Mohakhali C/A, Dhaka-1212, Bangladesh
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="tel:16457" className="hover:text-emerald-300">
                  Hotline: 16457 | +880 9613 444 888
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="mailto:info@green-delta.com" className="hover:text-emerald-300">
                  info@green-delta.com
                </a>
              </div>
            </div>
            <div className="pt-2 text-[11px] text-slate-500">
              Regulated by Insurance Development and Regulatory Authority (IDRA)
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Green Delta Insurance Company Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">Standardized Insurance Catalogue</span>
            <span className="text-slate-600">•</span>
            <span>Single Product Universe (45 Products)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
