"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  ShieldCheck,
  Building2,
  Users,
  CheckCircle2,
  ArrowRight,
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
        <div className="relative h-64 sm:h-72 w-full bg-slate-900">
          <Image
            src={imgSrc || product.imageUrl}
            alt={product.imageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 800px"
            onError={() => setImgSrc("/images/heroes/risk-categories-hero.jpg")}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-emerald-600 text-white shadow-xs">
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

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-18rem)] overflow-y-auto">
          {/* Market Segments Tag Bar */}
          <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-slate-100">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Eligible Market Segments:
            </span>
            {product.marketSegments.map((segment) => (
              <span
                key={segment}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200"
              >
                <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{segment}</span>
              </span>
            ))}
          </div>

          {/* Full Scope & Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 flex items-center gap-1.5">
              <FileText className="w-4 h-4" />
              <span>Underwriting Scope & Peril Coverage</span>
            </h4>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed bg-slate-50/70 p-4 rounded-xl border border-slate-100">
              {product.description}
            </p>
          </div>

          {/* Target Insured Audience */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-slate-600" />
              <span>Target Insured & Strategic Application</span>
            </h4>
            <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/60 text-slate-800 text-sm font-medium">
              {product.targetAudience}
            </div>
          </div>

          {/* Key Features Bullet List */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Key Policy Specifications & Safeguards</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer Call to Action */}
        <div className="bg-slate-50 px-6 sm:px-8 py-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Institutional underwriter: <strong className="text-slate-700">Green Delta Insurance Co. Ltd.</strong>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-semibold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition-colors"
            >
              Close
            </button>
            <a
              href="tel:16457"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2 rounded-lg text-xs font-semibold bg-emerald-700 text-white hover:bg-emerald-800 shadow-sm transition-colors"
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

