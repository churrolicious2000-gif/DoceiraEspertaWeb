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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-chocolate mb-4">Como funciona</h2>
          <p className="text-chocolate-light">É simples, rápido e totalmente gratuito.</p>
        </div>
        
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-dashed-line -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-sweet-pink text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-chocolate mb-3">{step.title}</h3>
                <p className="text-chocolate-light max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .bg-dashed-line {
          background-image: linear-gradient(to right, #FF85A1 50%, transparent 50%);
          background-size: 20px 1px;
          background-repeat: repeat-x;
        }
      `}</style>
    </section>
  );
}
