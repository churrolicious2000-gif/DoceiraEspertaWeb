import Image from "next/image";
import { WhatsAppButton } from "./WhatsAppButton";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFF8F4_0%,#FDF0EA_100%)] pt-12 pb-20 sm:pt-20 sm:pb-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-soft/50 text-pink-deep text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              Ideal para doceiras e confeiteiras
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-chocolate leading-[1.1] mb-8">
              Achadinhos para doceiras que querem <span className="text-pink-deep">economizar</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-chocolate-light mb-10 max-w-2xl leading-relaxed">
              Entre no grupo Doceira Esperta e acompanhe ofertas de embalagens, potinhos, moldes, utensílios e achadinhos para confeitaria.
            </p>
            
            <div className="flex flex-col items-center lg:items-start gap-6">
              <WhatsAppButton variant="hero" />
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-chocolate-light font-medium">
                <span className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-main" />
                  Grupo gratuito
                </span>
                <span className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-main" />
                  Ofertas atualizadas
                </span>
                <span className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-main" />
                  Confira antes de comprar
                </span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_24px_80px_rgba(90,56,46,0.14)] border border-border-soft">
                <Image
                  src="/hero-refined.png"
                  alt="Doceira Esperta - Achadinhos para Confeitaria"
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
