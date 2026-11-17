import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#0C2340]/5 via-slate-50 to-amber-50/10 relative overflow-hidden">
      {/* Signature Yellow Top Accent Ribbon */}
      <div className="h-[3.5px] bg-amber-400 w-full shadow-xs" />

      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-100/30 via-amber-50/20 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top Header / Logo Section */}
      <div className="w-full pt-12 pb-8 sm:pt-16 sm:pb-10 px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Company Official Logo */}
        <div className="relative mb-6 transition-transform hover:scale-105 duration-300 flex items-center justify-center">
          <Image
            src="/logos/logo-green.png"
            alt="Green Delta Insurance Company Limited"
            width={280}
            height={78}
            priority
            className="object-contain w-56 sm:w-72 h-auto"
          />
        </div>

        {/* Minimalist Subtitle with Blue & Yellow Accent */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#0C2340] text-amber-300 border border-amber-400/40 mb-4 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Standardized Insurance Product Catalogue</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0C2340] tracking-tight max-w-2xl">
          Product Portfolio
        </h1>
        <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-lg leading-relaxed">
          Select a portfolio classification structure to explore Green Delta&apos;s 45 non-life insurance products.
        </p>
      </div>

      {/* Two Attractive Portfolio Selection Cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto pb-12 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Card 1: Portfolio by Market Segment */}
          <Link
            href="/portfolio-by-market-segment"
            className="group relative flex flex-col bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-amber-400/80 hover:ring-2 hover:ring-amber-400/30 transition-all duration-300 overflow-hidden text-left"
          >
            {/* Visual Header with Yellow Ribbon */}
            <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#0C2340]" style={{ minHeight: "220px" }}>
              <Image
                src="/images/heroes/market-segments-hero.jpg"
                alt="Corporate skyscrapers representing enterprise and commercial markets"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340] via-[#0C2340]/60 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0C2340]/90 text-amber-300 border border-amber-400/40 shadow-md backdrop-blur-md flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>3 Market Segments</span>
                </span>
              </div>

              {/* Card Title inside Hero Overlay */}
              <div className="absolute bottom-5 left-6 right-6 z-10">
                <span className="text-amber-400 text-xs font-bold tracking-wider uppercase mb-1 block">
                  Commercial Structure
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                  Portfolio by Market Segment
                </h2>
              </div>
            </div>

            {/* Signature Yellow Ribbon Accent Stripe */}
            <div className="h-1 bg-amber-400 w-full" />

            {/* Card Content & Details */}
            <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between space-y-6">
              <div className="space-y-4">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Products organized by buyer scale and business procurement requirements, tailored for commercial conglomerates, small businesses, and individual policyholders.
                </p>

                {/* Segment Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200">
                    Corporate (31)
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-indigo-50 text-indigo-900 border border-indigo-200">
                    SME (34)
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200">
                    Retail / Personal (21)
                  </span>
                </div>
              </div>

              {/* Call to Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#0C2340] group-hover:text-amber-600 transition-colors">
                  <span>Explore Market Segments</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </span>
                <div className="w-9 h-9 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center group-hover:bg-[#0C2340] group-hover:text-amber-400 transition-all shadow-xs">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>

          {/* Card 2: Portfolio by Risk Category */}
          <Link
            href="/portfolio-by-risk-category"
            className="group relative flex flex-col bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-amber-400/80 hover:ring-2 hover:ring-amber-400/30 transition-all duration-300 overflow-hidden text-left"
          >
            {/* Visual Header with Yellow Ribbon */}
            <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#0C2340]" style={{ minHeight: "220px" }}>
              <Image
                src="/images/heroes/risk-categories-hero.jpg"
                alt="Modern engineering infrastructure construction representing technical risk disciplines"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340] via-[#0C2340]/60 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0C2340]/90 text-amber-300 border border-amber-400/40 shadow-md backdrop-blur-md flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>9 Risk Categories</span>
                </span>
              </div>

              {/* Card Title inside Hero Overlay */}
              <div className="absolute bottom-5 left-6 right-6 z-10">
                <span className="text-amber-400 text-xs font-bold tracking-wider uppercase mb-1 block">
                  Underwriting Structure
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                  Portfolio by Risk Category
                </h2>
              </div>
            </div>

            {/* Signature Yellow Ribbon Accent Stripe */}
            <div className="h-1 bg-amber-400 w-full" />

            {/* Card Content & Details */}
            <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between space-y-6">
              <div className="space-y-4">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Products grouped by technical underwriting discipline and covered perils, from Industrial All Risks and Marine Cargo to Engineering, Liability, and Health.
                </p>

                {/* Risk Categories Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200">
                    Engineering (8)
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-orange-50 text-orange-900 border border-orange-200">
                    Property (8)
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-pink-50 text-pink-900 border border-pink-200">
                    Health (8)
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700">
                    +6 More Categories
                  </span>
                </div>
              </div>

              {/* Call to Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#0C2340] group-hover:text-amber-600 transition-colors">
                  <span>Explore Risk Categories</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </span>
                <div className="w-9 h-9 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center group-hover:bg-[#0C2340] group-hover:text-amber-400 transition-all shadow-xs">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Minimal Bottom Footer */}
      <footer className="w-full py-6 px-4 text-center border-t border-slate-200/60 text-xs text-slate-500 space-y-1.5">
        <p className="text-[11px]">
          &copy; {new Date().getFullYear()} Green Delta Insurance Company Limited. All rights reserved.
        </p>
        <p className="text-[11px] text-slate-500">
          Concept by{" "}
          <a
            href="https://linkedin.com/in/ali-imranmehedi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0C2340] hover:text-amber-600 font-semibold underline underline-offset-2 transition-colors inline-flex items-center gap-1 group"
          >
            <span>Imran Mehedi</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </p>
      </footer>
    </main>
  );
}
