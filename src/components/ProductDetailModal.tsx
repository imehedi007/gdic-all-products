"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  ShieldCheck,
  Building2,
  Users,
  CheckCircle2,
  PhoneCall,
  FileText,
} from "lucide-react";
import { Product } from "@/data/products";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductDetailModal({
  product,
  onClose,
}: ProductDetailModalProps) {
  const [imgSrc, setImgSrc] = useState(product?.imageUrl || "");

  useEffect(() => {
    if (product) {
      setImgSrc(product.imageUrl);
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      {/* Backdrop Click */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 z-10 transition-all transform scale-100 animate-in zoom-in-95 duration-200">
        {/* Header Image with Gradient */}
        <div className="relative h-64 sm:h-72 w-full bg-[#0C2340]">
          <Image
            src={imgSrc || product.imageUrl}
            alt={product.imageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 800px"
            onError={() => setImgSrc("/images/heroes/risk-categories-hero.jpg")}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340] via-[#0C2340]/60 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-amber-400 text-slate-950 shadow-xs">
                  {product.code}
                </span>
                <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-white/20 text-white backdrop-blur-md border border-white/20">
                  {product.riskCategory}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight drop-shadow-xs">
                {product.name}
              </h3>
            </div>
          </div>
        </div>

        {/* Signature Yellow Ribbon Accent directly under header image */}
        <div className="h-1 bg-amber-400 w-full shadow-xs" />

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-5 max-h-[calc(85vh-18rem)] overflow-y-auto">
          {/* Market Segments Tag Bar */}
          <div className="flex flex-wrap items-center gap-2 pb-3.5 border-b border-slate-100">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Eligible Market Segments:
            </span>
            {product.marketSegments.map((segment) => (
              <span
                key={segment}
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200"
              >
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                <span>{segment}</span>
              </span>
            ))}
          </div>

          {/* Full Scope & Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0C2340] mb-2 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-amber-500" />
              <span>Underwriting Scope & Peril Coverage</span>
            </h4>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
              {product.description}
            </p>
          </div>

          {/* Target Insured Audience */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-slate-600" />
              <span>Target Insured & Application Scale</span>
            </h4>
            <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/70 text-slate-800 text-xs sm:text-sm font-medium">
              {product.targetAudience}
            </div>
          </div>

          {/* Key Features Bullet List */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-800" />
              <span>Key Policy Specifications & Safeguards</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer Call to Action */}
        <div className="bg-slate-50 px-6 sm:px-8 py-3.5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] text-slate-500 text-center sm:text-left">
            Underwriter: <strong className="text-[#0C2340]">Green Delta Insurance Company Ltd.</strong>
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-semibold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition-colors"
            >
              Close
            </button>
            <a
              href="tel:16457"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-[#0C2340] text-amber-400 hover:bg-[#133863] border-b-2 border-amber-400 shadow-sm transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Inquire Coverage (16457)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
