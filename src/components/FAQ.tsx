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
    <section className="py-24 bg-cream-soft">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-chocolate mb-6">Dúvidas Frequentes</h2>
          <div className="w-20 h-1 bg-pink-main mx-auto rounded-full opacity-30" />
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[2rem] border border-border-soft overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-cream/50 transition-colors"
              >
                <span className="font-serif font-bold text-chocolate text-lg lg:text-xl">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-pink-main" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-pink-main" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-8 text-chocolate-light leading-relaxed text-base lg:text-lg animate-in fade-in slide-in-from-top-2 duration-500">
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
