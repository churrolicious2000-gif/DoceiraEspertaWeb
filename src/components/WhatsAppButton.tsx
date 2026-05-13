"use client";

import { useTracking } from "@/hooks/useTracking";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  variant?: "hero" | "fixed" | "simple";
  className?: string;
}

export function WhatsAppButton({ variant = "simple", className = "" }: WhatsAppButtonProps) {
  const { trackWhatsAppClick } = useTracking();

  const baseStyles = "inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 rounded-full shadow-lg hover:scale-105 active:scale-95";
  
  const variants = {
    hero: "bg-sweet-pink text-white px-8 py-4 text-xl w-full sm:w-auto",
    fixed: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 text-lg w-[90%] sm:hidden",
    simple: "bg-sweet-pink text-white px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={trackWhatsAppClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <MessageCircle className="w-6 h-6" />
      {variant === "hero" ? "Entrar no grupo de WhatsApp" : "Quero entrar no grupo"}
    </button>
  );
}
