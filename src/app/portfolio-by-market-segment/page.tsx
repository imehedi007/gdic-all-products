"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  ShieldCheck,
  Search,
  Filter,
  ArrowRightLeft,
  ChevronRight,
  Briefcase,
  UserCheck,
  HelpCircle,
  X,
  Layers,
  LayoutGrid,
  ListFilter,
  CheckCircle,
  BadgeCheck,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetailModal } from "@/components/ProductDetailModal";
import {
  PRODUCTS,
  Product,
  MarketSegment,
  MARKET_SEGMENTS_INFO,
  RISK_CATEGORIES_INFO,
} from "@/data/products";

export default function MarketSegmentPortfolioPage() {
  const [selectedSegment, setSelectedSegment] = useState<string>("Corporate");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedRiskCategory, setSelectedRiskCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "editorial">("grid");
  const [sortBy, setSortBy] = useState<"default" | "name" | "code">("default");
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    const list = PRODUCTS.filter((product) => {
      // Segment filter
      const matchesSegment =
        selectedSegment === "all" ||
        product.marketSegments.includes(selectedSegment as MarketSegment);

      // Risk category secondary filter
      const matchesCategory =
        selectedRiskCategory === "all" ||
        product.riskCategory === selectedRiskCategory;

      // Search query filter (matches name, code, description, risk category, or target audience)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.code.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.riskCategory.toLowerCase().includes(q) ||
        product.targetAudience.toLowerCase().includes(q);

      return matchesSegment && matchesCategory && matchesSearch;
    });

    // Sorting
    if (sortBy === "name") {
      return [...list].sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortBy === "code") {
      return [...list].sort((a, b) => a.code.localeCompare(b.code));
    }
    return list;
  }, [selectedSegment, selectedRiskCategory, searchQuery, sortBy]);

  // Selected segment metadata
  const currentSegmentInfo = useMemo(() => {
    return MARKET_SEGMENTS_INFO.find((s) => s.id === selectedSegment) || null;
  }, [selectedSegment]);

  // Icon selector helper
  const getSegmentIcon = (id: string) => {
    switch (id) {
      case "Corporate":
        return Building2;
      case "SME":
        return Briefcase;
      case "Retail / Personal":
        return UserCheck;
      default:
        return Layers;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      {/* Hero Banner with Corporate Blue & Yellow Accents */}
      <section className="relative bg-[#0C2340] text-white overflow-hidden py-9 sm:py-11 lg:py-13 border-b border-slate-800">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/heroes/market-segments-hero.jpg"
            alt="Modern corporate financial architecture"
            fill
            priority
            className="object-cover object-center opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C2340] via-[#0C2340]/95 to-[#133863]/85" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              {/* Breadcrumb & Navigation Pill */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-amber-400">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-white">Portfolio by Market Segment</span>
              </div>

              {/* Title & Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40 backdrop-blur-md">
                <Building2 className="w-3 h-3 text-amber-400" />
                <span>Commercial Distribution &bull; 3 Market Segments</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Portfolio by Market Segment
              </h1>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                Browse Green Delta&apos;s 45 standardized non-life products structured by client enterprise tier. Select a market segment from the sidebar to explore tailored institutional covers, SME policies, and personal safeguards.
              </p>

              {/* Concise Segment Stat Counters */}
              <div className="grid grid-cols-3 gap-2.5 pt-1 max-w-md">
                <button
                  onClick={() => setSelectedSegment("Corporate")}
                  className={`text-left py-2 px-3 rounded-xl border backdrop-blur-sm transition-all ${
                    selectedSegment === "Corporate"
                      ? "bg-[#0C2340] border-amber-400 shadow-xs ring-1 ring-amber-400/50"
                      : "bg-slate-900/80 border-slate-700/80 hover:border-slate-600"
                  }`}
                >
                  <div className="text-lg sm:text-xl font-extrabold text-amber-400">31</div>
                  <div className="text-[11px] text-slate-300 font-medium">Corporate</div>
                </button>
                <button
                  onClick={() => setSelectedSegment("SME")}
                  className={`text-left py-2 px-3 rounded-xl border backdrop-blur-sm transition-all ${
                    selectedSegment === "SME"
                      ? "bg-[#0C2340] border-amber-400 shadow-xs ring-1 ring-amber-400/50"
                      : "bg-slate-900/80 border-slate-700/80 hover:border-slate-600"
                  }`}
                >
                  <div className="text-lg sm:text-xl font-extrabold text-amber-400">34</div>
                  <div className="text-[11px] text-slate-300 font-medium">SME Commercial</div>
                </button>
                <button
                  onClick={() => setSelectedSegment("Retail / Personal")}
                  className={`text-left py-2 px-3 rounded-xl border backdrop-blur-sm transition-all ${
                    selectedSegment === "Retail / Personal"
                      ? "bg-[#0C2340] border-amber-400 shadow-xs ring-1 ring-amber-400/50"
                      : "bg-slate-900/80 border-slate-700/80 hover:border-slate-600"
                  }`}
                >
                  <div className="text-lg sm:text-xl font-extrabold text-amber-400">21</div>
                  <div className="text-[11px] text-slate-300 font-medium">Retail / Personal</div>
                </button>
              </div>
            </div>

            {/* Concise Switcher Card to Alternative View */}
            <div className="lg:max-w-xs w-full bg-[#081B30]/90 rounded-xl p-4 border border-slate-700/80 backdrop-blur-md shadow-lg flex flex-col justify-between space-y-3">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  <ArrowRightLeft className="w-3 h-3" />
                  <span>Alternative View</span>
                </div>
                <h2 className="text-sm font-bold text-white">
                  Portfolio by Risk Category
                </h2>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Analyze these same 45 products structured across 9 technical underwriting risk categories.
                </p>
              </div>

              <Link
                href="/portfolio-by-risk-category"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-all shadow-sm group"
              >
                <span>Switch to Risk Categories</span>
                <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Yellow Ribbon Accent directly under Hero */}
      <div className="h-[3.5px] bg-amber-400 w-full shadow-xs" />

      {/* Mobile Sticky Category Pills */}
      <div className="lg:hidden sticky top-20 z-30 bg-[#0C2340] border-b border-slate-800 px-3 py-2.5 shadow-md">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-0.5">
          <button
            onClick={() => setSelectedSegment("all")}
            className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
              selectedSegment === "all"
                ? "bg-amber-400 text-slate-950 shadow-xs"
                : "bg-white/10 text-slate-200 hover:bg-white/15"
            }`}
          >
            All Segments (45)
          </button>
          {MARKET_SEGMENTS_INFO.map((seg) => {
            const Icon = getSegmentIcon(seg.id);
            const isSelected = selectedSegment === seg.id;
            return (
              <button
                key={seg.id}
                onClick={() => setSelectedSegment(seg.id)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? "bg-amber-400 text-slate-950 shadow-xs"
                    : "bg-white/10 text-slate-200 hover:bg-white/15 hover:text-white"
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>
                  {seg.id} ({seg.productCount})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Split-Panel Layout Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* ========================================================= */}
          {/* LEFT PANEL: CONCISE STICKY SIDEBAR (~25%)                 */}
          {/* ========================================================= */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3 sticky top-24 self-start space-y-4">
            {/* Sidebar Navigation Card */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-3.5 space-y-3.5">
              {/* Sidebar Header & Search Box */}
              <div className="space-y-2.5 pb-2.5 border-b border-slate-100">
                <div className="flex items-center justify-between px-1">
                  <h3 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                    Market Segments
                  </h3>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-950 border border-blue-200/60">
                    45 Total
                  </span>
                </div>

                {/* Instant Search Box */}
                <div className="relative">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-7 py-1.5 rounded-lg text-xs bg-slate-50 border border-slate-200 focus:border-amber-400 focus:bg-white focus:outline-none transition-all placeholder:text-slate-400"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      title="Clear search"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>

              {/* Vertical Category Navigation List */}
              <nav className="space-y-1" aria-label="Market Segment Navigation">
                {/* All Segments Item */}
                <button
                  onClick={() => setSelectedSegment("all")}
                  className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-all ${
                    selectedSegment === "all"
                      ? "bg-[#0C2340] text-white shadow-xs font-semibold border-l-4 border-amber-400"
                      : "text-slate-700 hover:bg-slate-100/80 font-medium"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                        selectedSegment === "all"
                          ? "bg-white/10 text-amber-400"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">All Segments</div>
                      <div
                        className={`text-[10px] ${
                          selectedSegment === "all"
                            ? "text-slate-300"
                            : "text-slate-400"
                        }`}
                      >
                        45 Products
                      </div>
                    </div>
                  </div>
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      selectedSegment === "all"
                        ? "bg-amber-400 text-slate-950"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    45
                  </span>
                </button>

                {/* 3 Market Segments */}
                {MARKET_SEGMENTS_INFO.map((segment) => {
                  const Icon = getSegmentIcon(segment.id);
                  const isSelected = selectedSegment === segment.id;

                  return (
                    <button
                      key={segment.id}
                      onClick={() => setSelectedSegment(segment.id)}
                      className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-all ${
                        isSelected
                          ? "bg-[#0C2340] text-white shadow-xs font-semibold border-l-4 border-amber-400"
                          : "text-slate-700 hover:bg-slate-100/80 font-medium"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                            isSelected
                              ? "bg-white/10 text-amber-400"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold">{segment.id}</div>
                          <div
                            className={`text-[10px] line-clamp-1 max-w-[130px] ${
                              isSelected ? "text-amber-300" : "text-slate-400"
                            }`}
                          >
                            {segment.subtitle}
                          </div>
                        </div>
                      </div>
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                          isSelected
                            ? "bg-amber-400 text-slate-950 font-bold"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {segment.productCount}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Secondary Cross-Filter: Risk Category */}
              <div className="pt-2.5 border-t border-slate-100 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold px-1">
                  <span>Cross-Filter by Risk:</span>
                  {selectedRiskCategory !== "all" && (
                    <button
                      onClick={() => setSelectedRiskCategory("all")}
                      className="text-amber-600 hover:underline text-[10px] font-bold"
                    >
                      Reset
                    </button>
                  )}
                </div>
                <div className="relative">
                  <select
                    value={selectedRiskCategory}
                    onChange={(e) => setSelectedRiskCategory(e.target.value)}
                    className="w-full py-1.5 pl-2.5 pr-7 rounded-lg text-xs font-medium bg-slate-50 border border-slate-200 focus:border-amber-400 focus:bg-white focus:outline-none appearance-none cursor-pointer"
                  >
                    <option value="all">All 9 Risk Disciplines</option>
                    {RISK_CATEGORIES_INFO.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.title} ({cat.productCount})
                      </option>
                    ))}
                  </select>
                  <Filter className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Concise Underwriting Advisory Card with Yellow Accents */}
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#0C2340]/5 to-amber-50/40 border border-amber-200/60 text-[11px] space-y-1">
                <div className="flex items-center gap-1 font-bold text-[#0C2340]">
                  <BadgeCheck className="w-3.5 h-3.5 text-amber-500" />
                  <span>Underwriting Advisory</span>
                </div>
                <p className="text-[10px] text-slate-600 leading-snug">
                  Bespoke treaty terms and high-capacity underwriting are available for corporate groups.
                </p>
                <div className="pt-0.5 flex items-center justify-between text-[10px] font-bold text-[#0C2340]">
                  <span className="text-amber-600">Hotline: 16457</span>
                  <span className="text-slate-500">24/7 Desk</span>
                </div>
              </div>
            </div>
          </aside>

          {/* ========================================================= */}
          {/* RIGHT PANEL: PRODUCT DISPLAY & CATEGORY HERO (~75%)       */}
          {/* ========================================================= */}
          <main className="col-span-12 lg:col-span-8 xl:col-span-9 space-y-4">
            {/* Concise Category Hero Banner */}
            <div className="relative rounded-2xl overflow-hidden bg-[#0C2340] text-white p-5 sm:p-6 lg:p-7 border border-slate-800 shadow-sm">
              <div className="absolute inset-0 -z-10">
                <Image
                  src={
                    currentSegmentInfo?.heroImage ||
                    "/images/heroes/market-segments-hero.jpg"
                  }
                  alt={currentSegmentInfo?.title || "Market Segments"}
                  fill
                  className="object-cover opacity-25"
                  sizes="(max-width: 1200px) 100vw, 1000px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0C2340] via-[#0C2340]/90 to-transparent" />
              </div>

              <div className="max-w-2xl space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    {selectedSegment === "all"
                      ? "Commercial Distribution View"
                      : currentSegmentInfo?.badge || selectedSegment}
                  </span>
                  <span className="text-[11px] text-slate-300 font-medium">
                    {selectedSegment === "all"
                      ? "All 3 Market Tiers"
                      : currentSegmentInfo?.subtitle}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                  {selectedSegment === "all"
                    ? "All Commercial Market Segments"
                    : currentSegmentInfo?.title}
                </h2>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedSegment === "all"
                    ? "Explore Green Delta's 45 non-life products tailored across enterprise procurement scales: Corporate (31), SME (34), and Retail / Personal (21)."
                    : currentSegmentInfo?.description}
                </p>

                <div className="pt-1 flex flex-wrap items-center gap-2.5 text-[11px] text-slate-300">
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/10 backdrop-blur-md">
                    <CheckCircle className="w-3 h-3 text-amber-400" />
                    <span>
                      <strong>{filteredProducts.length}</strong> Products Displayed
                    </span>
                  </div>
                  {selectedRiskCategory !== "all" && (
                    <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-amber-400/20 text-amber-300 border border-amber-400/30">
                      <span>Filtered by: {selectedRiskCategory}</span>
                      <button
                        onClick={() => setSelectedRiskCategory("all")}
                        className="hover:text-white"
                      >
                        <X className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Signature Yellow Ribbon Accent stripe on right panel */}
            <div className="h-[2px] bg-amber-400/80 w-full rounded-full" />

            {/* Concise Controls Bar: View Toggle, Sort, Search Feedback */}
            <div className="bg-white rounded-xl border border-slate-200/90 p-3 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
              {/* Product Counter / Filter Status */}
              <div className="flex items-center gap-1.5 text-xs text-slate-600 w-full sm:w-auto">
                <span>
                  Showing <strong>{filteredProducts.length}</strong> of{" "}
                  <strong>{PRODUCTS.length}</strong> products
                </span>
                {(searchQuery || selectedRiskCategory !== "all") && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedRiskCategory("all");
                    }}
                    className="text-amber-600 hover:underline font-bold ml-2 text-[11px]"
                  >
                    Clear active filters
                  </button>
                )}
              </div>

              {/* View Mode & Sort Controls */}
              <div className="flex items-center justify-between sm:justify-end gap-2.5 w-full sm:w-auto">
                {/* Sort Dropdown */}
                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <span className="hidden sm:inline text-[11px]">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) =>
                      setSortBy(e.target.value as "default" | "name" | "code")
                    }
                    className="py-1 pl-2 pr-6 rounded-lg text-xs font-semibold bg-slate-50 border border-slate-200 focus:outline-none focus:border-amber-400 cursor-pointer"
                  >
                    <option value="default">Default</option>
                    <option value="name">Name (A-Z)</option>
                    <option value="code">Code (A-Z)</option>
                  </select>
                </div>

                {/* View Mode Switcher */}
                <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200/80">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-bold transition-all ${
                      viewMode === "grid"
                        ? "bg-[#0C2340] text-amber-300 shadow-2xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                    title="Grid View"
                  >
                    <LayoutGrid className="w-3 h-3" />
                    <span className="hidden md:inline text-[11px]">Grid</span>
                  </button>
                  <button
                    onClick={() => setViewMode("editorial")}
                    className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-bold transition-all ${
                      viewMode === "editorial"
                        ? "bg-[#0C2340] text-amber-300 shadow-2xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                    title="Editorial / Detailed View"
                  >
                    <ListFilter className="w-3 h-3" />
                    <span className="hidden md:inline text-[11px]">Editorial</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Dynamic Product Grid with Concise Gap */}
            <AnimatePresence mode="wait">
              {filteredProducts.length === 0 ? (
                <motion.div
                  key="empty-state"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3"
                >
                  <HelpCircle className="w-10 h-10 text-slate-300 mx-auto" />
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-800">
                      No matching products found
                    </h3>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      No products match your current search query &ldquo;{searchQuery}&rdquo; and active risk category filter in {selectedSegment}.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedRiskCategory("all");
                      setSelectedSegment("all");
                    }}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#0C2340] text-amber-400 hover:bg-[#133863] border-b-2 border-amber-400 transition-colors shadow-xs"
                  >
                    Reset All Filters
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key={`${selectedSegment}-${selectedRiskCategory}-${sortBy}-${viewMode}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
                      : "space-y-3"
                  }
                >
                  {filteredProducts.map((product, index) => (
                    <ProductCard
                      key={`${selectedSegment}-${product.id}`}
                      product={product}
                      onSelect={(p) => setActiveModalProduct(p)}
                      showSegmentTags={true}
                      showCategoryTag={true}
                      layout={viewMode}
                      isFeatured={index === 0 && selectedSegment !== "all"}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />

      <Footer />
    </div>
  );
}
