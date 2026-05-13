import { AlertCircle } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export function AlertBox() {
  return (
    <div className="container mx-auto px-4 my-16">
      <div className="bg-cream-light border border-border-soft p-8 rounded-[2rem] flex flex-col sm:flex-row items-center gap-8 max-w-4xl mx-auto shadow-sm">
        <div className="w-16 h-16 bg-soft-pink rounded-full flex items-center justify-center shrink-0 shadow-inner">
          <AlertCircle className="w-8 h-8 text-primary-pink" />
        </div>
        <div>
          <h4 className="font-serif font-bold text-chocolate text-xl mb-3">Importante:</h4>
          <p className="text-soft-brown text-sm lg:text-base leading-relaxed">
            Os preços podem mudar conforme estoque, frete, cupom e variação escolhida. Antes de finalizar a compra, confira a quantidade, avaliações do vendedor e prazo de entrega diretamente na plataforma.
          </p>
        </div>
      </div>
    </div>
  );
}

export function FinalCTA() {
  return (
    <section className="py-28 bg-chocolate text-cream-light overflow-hidden relative">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif font-bold mb-8 leading-tight">
          Quer receber os achadinhos?
        </h2>
        <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Entre no grupo e acompanhe ofertas úteis para sua produção de doces. Economize e profissionalize sua confeitaria hoje mesmo!
        </p>
        <WhatsAppButton className="shadow-2xl" />
      </div>
      
      {/* Delicate background patterns */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-pink opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-soft-pink opacity-5 rounded-full translate-x-1/3 translate-y-1/3 blur-[100px]" />
    </section>
  );
}
