"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Users,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  showCategoryTag?: boolean;
  showSegmentTags?: boolean;
  layout?: "grid" | "editorial";
  isFeatured?: boolean;
}

export function ProductCard({
  product,
  onSelect,
  showCategoryTag = true,
  showSegmentTags = true,
  layout = "grid",
  isFeatured = false,
}: ProductCardProps) {
  const [imgSrc, setImgSrc] = useState(product.imageUrl);

  // Sync image source whenever product changes
  useEffect(() => {
    setImgSrc(product.imageUrl);
  }, [product.imageUrl]);

  // Category badge color mapping
  const categoryColorMap: Record<string, string> = {
    Agriculture: "bg-emerald-50 text-emerald-800 border-emerald-200/80",
    Engineering: "bg-blue-50 text-blue-900 border-blue-200/80",
    Liability: "bg-rose-50 text-rose-800 border-rose-200/80",
    Marine: "bg-cyan-50 text-cyan-800 border-cyan-200/80",
    Motor: "bg-amber-50 text-amber-900 border-amber-200/80",
    "Financial Protection": "bg-indigo-50 text-indigo-900 border-indigo-200/80",
    "Personal Accident & Health": "bg-pink-50 text-pink-800 border-pink-200/80",
    Property: "bg-orange-50 text-orange-900 border-orange-200/80",
    Travel: "bg-sky-50 text-sky-800 border-sky-200/80",
  };

  const catBadgeClass =
    categoryColorMap[product.riskCategory] ||
    "bg-slate-50 text-slate-700 border-slate-200";

  // Segment badge color mapping (Primary Blue, Secondary Yellow/Amber)
  const segmentColorMap: Record<string, string> = {
    Corporate: "bg-blue-50 text-blue-900 border-blue-200 font-semibold",
    SME: "bg-indigo-50 text-indigo-900 border-indigo-200 font-semibold",
    "Retail / Personal": "bg-amber-50 text-amber-900 border-amber-200 font-semibold",
  };

  // --- EDITORIAL / COMPACT HORIZONTAL LAYOUT ---
  if (layout === "editorial") {
    return (
      <div
        onClick={() => onSelect(product)}
        className={`group relative flex flex-col md:flex-row bg-white rounded-xl border ${
          isFeatured
            ? "border-amber-400 ring-1 ring-amber-400/40 shadow-xs"
            : "border-slate-200/90 shadow-2xs hover:border-amber-400/80 hover:ring-1 hover:ring-amber-400/30"
        } hover:shadow-lg transition-all duration-200 overflow-hidden cursor-pointer`}
      >
        {/* Editorial Image Container */}
        <div className="relative h-36 md:h-auto md:w-56 shrink-0 overflow-hidden bg-slate-100">
          <Image
            src={imgSrc}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 240px"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            onError={() => setImgSrc("/images/heroes/risk-categories-hero.jpg")}
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0C2340]/80 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

          {/* Floating Code Badge & Featured Ribbon */}
          <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#0C2340]/90 text-amber-300 backdrop-blur-md shadow-xs border border-amber-400/30">
              {product.code}
            </span>
            {isFeatured && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-400 text-slate-950 shadow-xs flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" />
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Editorial Content Area */}
        <div className="flex flex-col flex-1 p-3.5 sm:p-4 justify-between space-y-2.5">
          <div className="space-y-1.5">
            {/* Header Badges */}
            <div className="flex flex-wrap items-center gap-1.5">
              {showCategoryTag && (
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${catBadgeClass}`}
                >
                  {product.riskCategory}
                </span>
              )}
              {showSegmentTags &&
                product.marketSegments.map((seg) => (
                  <span
                    key={seg}
                    className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] border ${
                      segmentColorMap[seg] || "bg-slate-50 text-slate-600 border-slate-200"
                    }`}
                  >
                    <Building2 className="w-2.5 h-2.5 opacity-60" />
                    <span>{seg}</span>
                  </span>
                ))}
            </div>

            {/* Title */}
            <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors tracking-tight">
              {product.name}
            </h3>

            {/* Description Snippet */}
            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
              {product.description}
            </p>

            {/* Feature Highlights Preview */}
            {product.features && product.features.length > 0 && (
              <div className="pt-0.5 grid grid-cols-1 sm:grid-cols-2 gap-1">
                {product.features.slice(0, 2).map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 text-[11px] text-slate-600"
                  >
                    <CheckCircle2 className="w-3 h-3 text-amber-500 shrink-0" />
                    <span className="line-clamp-1">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Metadata & Action */}
          <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px]">
            <div className="flex items-center gap-1 text-slate-500">
              <Users className="w-3 h-3 text-slate-400 shrink-0" />
              <span className="line-clamp-1 text-slate-600 font-medium">
                Target: {product.targetAudience}
              </span>
            </div>

            <span className="inline-flex items-center gap-1 font-bold text-[#0C2340] group-hover:text-amber-600 transition-colors shrink-0">
              <span>View Policy Scope</span>
              <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    );
  }

  // --- CONCISE STANDARD GRID LAYOUT ---
  return (
    <div
      onClick={() => onSelect(product)}
      className={`group relative flex flex-col bg-white rounded-xl border ${
        isFeatured
          ? "border-amber-400 ring-1 ring-amber-400/40 shadow-xs"
          : "border-slate-200/90 shadow-2xs hover:border-amber-400/80 hover:ring-1 hover:ring-amber-400/30"
      } hover:shadow-lg transition-all duration-200 overflow-hidden cursor-pointer`}
    >
      {/* Product Image Container */}
      <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-100">
        <Image
          src={imgSrc}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          onError={() => setImgSrc("/images/heroes/risk-categories-hero.jpg")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/80 via-[#0C2340]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Top Floating Badges & Yellow Ribbon/Badge */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5 z-10">
          <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#0C2340]/90 text-amber-300 backdrop-blur-md shadow-xs border border-amber-400/30">
            {product.code}
          </span>

          <div className="flex items-center gap-1">
            {isFeatured && (
              <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-amber-400 text-slate-950 shadow-xs">
                Featured
              </span>
            )}
            {showCategoryTag && (
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border backdrop-blur-md shadow-xs ${catBadgeClass}`}
              >
                {product.riskCategory}
              </span>
            )}
          </div>
        </div>

        {/* Floating Arrow on Hover (Yellow Accent) */}
        <div className="absolute bottom-2.5 right-2.5 w-7 h-7 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-1.5 group-hover:translate-y-0 transition-all shadow-md">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Card Content Area */}
      <div className="flex flex-col flex-1 p-3.5 sm:p-4 space-y-2.5">
        {/* Title */}
        <div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors tracking-tight line-clamp-1">
            {product.name}
          </h3>
          <p className="mt-0.5 text-[11px] text-slate-500 font-medium">
            Risk Domain: <span className="text-slate-700 font-semibold">{product.riskCategory}</span>
          </p>
        </div>

        {/* Description Snippet */}
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed flex-1">
          {product.description}
        </p>

        {/* Target Market Segment Tags */}
        {showSegmentTags && (
          <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1 items-center">
            {product.marketSegments.map((seg) => (
              <span
                key={seg}
                className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] border ${
                  segmentColorMap[seg] || "bg-slate-100 text-slate-700 border-slate-200"
                }`}
              >
                <Building2 className="w-2.5 h-2.5 opacity-60" />
                <span>{seg}</span>
              </span>
            ))}
          </div>
        )}

        {/* Target Audience Snippet */}
        <div className="flex items-center gap-1.5 text-[11px] text-slate-500 bg-slate-50 py-1.5 px-2.5 rounded-lg border border-slate-100">
          <Users className="w-3 h-3 text-slate-400 shrink-0" />
          <span className="line-clamp-1 text-slate-700 font-medium">
            {product.targetAudience}
          </span>
        </div>

        {/* Card Action Footer */}
        <div className="pt-1 flex items-center justify-between text-[11px] font-bold text-[#0C2340] group-hover:text-amber-600">
          <span>View Policy Specs & Scope</span>
          <span className="flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
            Details &rarr;
          </span>
        </div>
      </div>
    </div>
  );
}
