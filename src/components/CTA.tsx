import { AlertCircle } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export function AlertBox() {
  return (
    <div className="container mx-auto px-4 my-12">
      <div className="bg-white border-2 border-dashed border-sweet-pink p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center gap-6 max-w-4xl mx-auto shadow-sm">
        <div className="w-16 h-16 bg-soft-pink rounded-full flex items-center justify-center shrink-0">
          <AlertCircle className="w-8 h-8 text-sweet-pink" />
        </div>
        <div>
          <h4 className="font-bold text-chocolate text-lg mb-2">Importante:</h4>
          <p className="text-chocolate-light text-sm leading-relaxed">
            Os preços podem mudar conforme estoque, frete, cupom e variação escolhida. Antes de finalizar a compra, confira a quantidade, avaliações do vendedor e prazo de entrega diretamente na plataforma.
          </p>
        </div>
      </div>
    </div>
  );
}

export function FinalCTA() {
  return (
    <section className="py-24 bg-sweet-pink text-white overflow-hidden relative">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Quer receber os achadinhos?
        </h2>
        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
          Entre no grupo e acompanhe ofertas úteis para sua produção de doces. Economize e profissionalize sua confeitaria hoje mesmo!
        </p>
        <WhatsAppButton className="bg-white text-sweet-pink hover:bg-cream" />
      </div>
      
      {/* Decorative background patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3" />
    </section>
  );
}
