"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "O grupo é gratuito?",
    answer: "Sim, a entrada e permanência no grupo são totalmente gratuitas.",
  },
  {
    question: "O grupo é só para doceiras?",
    answer: "Ele é focado em confeitaria, doces, embalagens e utensílios, mas qualquer pessoa interessada pode entrar e aproveitar as ofertas.",
  },
  {
    question: "Os produtos são vendidos pelo grupo?",
    answer: "Não. O grupo apenas compartilha achadinhos/ofertas. A compra acontece diretamente na loja anunciada (Shopee, Amazon, Mercado Livre, etc).",
  },
  {
    question: "Os preços são garantidos?",
    answer: "Não. Os preços podem mudar conforme estoque, frete e promoções da própria loja. Por isso, sempre confira o valor final no carrinho.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-chocolate mb-4">Dúvidas Frequentes</h2>
          <div className="w-16 h-1 bg-sweet-pink mx-auto rounded-full" />
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-soft-pink overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-soft-pink/10 transition-colors"
              >
                <span className="font-bold text-chocolate">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-sweet-pink" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-sweet-pink" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5 text-chocolate-light leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
