"use client";

import { useTracking } from "@/hooks/useTracking";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  variant?: "hero" | "fixed" | "simple";
  className?: string;
}

export function WhatsAppButton({ variant = "simple", className = "" }: WhatsAppButtonProps) {
  const { trackWhatsAppClick } = useTracking();

  const baseStyles = "inline-flex items-center justify-center gap-2 font-bold transition-all duration-500 rounded-full shadow-md hover:shadow-xl active:scale-95";
  
  const variants = {
    hero: "bg-primary-pink text-white px-10 py-5 text-xl w-full sm:w-auto hover:bg-dark-pink transform hover:-translate-y-1",
    fixed: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#25D366] text-white px-8 py-4 text-lg w-[90%] sm:hidden shadow-2xl",
    simple: "bg-primary-pink text-white px-8 py-4 text-lg hover:bg-dark-pink",
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
