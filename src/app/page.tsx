import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-slate-50 via-slate-50/80 to-emerald-50/40 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-100/40 via-emerald-50/20 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

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

        {/* Minimalist Subtitle */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-100/80 text-emerald-800 border border-emerald-200/80 mb-4 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Standardized Insurance Product Catalogue</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight max-w-2xl">
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
            className="group relative flex flex-col bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-emerald-500/50 transition-all duration-300 overflow-hidden text-left"
          >
            {/* Visual Header with Demo Unsplash Imagery */}
            <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900" style={{ minHeight: "220px" }}>
              <Image
                src="/images/heroes/market-segments-hero.jpg"
                alt="Corporate skyscrapers representing enterprise and commercial markets"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-slate-900 shadow-md backdrop-blur-md flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>3 Market Segments</span>
                </span>
              </div>

              {/* Card Title inside Hero Overlay */}
              <div className="absolute bottom-5 left-6 right-6 z-10">
                <span className="text-emerald-400 text-xs font-bold tracking-wider uppercase mb-1 block">
                  Commercial Structure
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                  Portfolio by Market Segment
                </h2>
              </div>
            </div>

            {/* Card Content & Details */}
            <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between space-y-6">
              <div className="space-y-4">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Products organized by buyer scale and business procurement requirements, tailored for commercial conglomerates, small businesses, and individual policyholders.
                </p>

                {/* Segment Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                    Corporate (31)
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200/60">
                    SME (34)
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200/60">
                    Retail / Personal (21)
                  </span>
                </div>
              </div>

              {/* Call to Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 group-hover:text-emerald-800 transition-colors">
                  <span>Explore Market Segments</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </span>
                <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition-all shadow-xs">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>

          {/* Card 2: Portfolio by Risk Category */}
          <Link
            href="/portfolio-by-risk-category"
            className="group relative flex flex-col bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-emerald-500/50 transition-all duration-300 overflow-hidden text-left"
          >
            {/* Visual Header with Demo Unsplash Imagery */}
            <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900" style={{ minHeight: "220px" }}>
              <Image
                src="/images/heroes/risk-categories-hero.jpg"
                alt="Modern engineering infrastructure construction representing technical risk disciplines"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-slate-900 shadow-md backdrop-blur-md flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>9 Risk Categories</span>
                </span>
              </div>

              {/* Card Title inside Hero Overlay */}
              <div className="absolute bottom-5 left-6 right-6 z-10">
                <span className="text-emerald-400 text-xs font-bold tracking-wider uppercase mb-1 block">
                  Underwriting Structure
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                  Portfolio by Risk Category
                </h2>
              </div>
            </div>

            {/* Card Content & Details */}
            <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between space-y-6">
              <div className="space-y-4">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Products grouped by technical underwriting discipline and covered perils, from Industrial All Risks and Marine Cargo to Engineering, Liability, and Health.
                </p>

                {/* Risk Categories Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                    Engineering (8)
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                    Property (8)
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                    Health (8)
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700">
                    +6 More Categories
                  </span>
                </div>
              </div>

              {/* Call to Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 group-hover:text-emerald-800 transition-colors">
                  <span>Explore Risk Categories</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </span>
                <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition-all shadow-xs">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Minimal Bottom Footer */}
      <footer className="w-full py-6 px-4 text-center border-t border-slate-200/60 text-xs text-slate-400">
        <p>
          &copy; {new Date().getFullYear()} Green Delta Insurance Company Limited. 45 Standardized Products &bull; Dual-Classification Architecture.
        </p>
      </footer>
    </main>
  );
}
