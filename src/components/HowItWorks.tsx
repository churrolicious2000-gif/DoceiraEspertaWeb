"use client";

import { UserPlus, Bell, ShoppingCart } from "lucide-react";

const steps = [
  {
    title: "1. Você entra no grupo",
    description: "Clique no botão e entre gratuitamente na nossa comunidade.",
    icon: UserPlus,
  },
  {
    title: "2. Recebe os achadinhos",
    description: "Enviamos diariamente ofertas curadas de embalagens e utensílios.",
    icon: Bell,
  },
  {
    title: "3. Confere e compra",
    description: "Veja o preço, frete e avaliações antes de finalizar seu pedido.",
    icon: ShoppingCart,
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-chocolate mb-4">Como funciona</h2>
          <p className="text-chocolate-light">É simples, rápido e totalmente gratuito.</p>
          <div className="w-16 h-1 bg-pink-main mx-auto rounded-full mt-6 opacity-20" />
        </div>
        
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-border-soft -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-cream-soft border-2 border-pink-soft text-pink-main flex items-center justify-center mb-8 shadow-sm group-hover:bg-pink-main group-hover:text-white transition-all duration-500">
                  <step.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-chocolate mb-4">{step.title}</h3>
                <p className="text-chocolate-light max-w-xs text-sm lg:text-base leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
