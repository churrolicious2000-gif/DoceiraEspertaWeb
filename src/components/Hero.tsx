import Image from "next/image";
import { WhatsAppButton } from "./WhatsAppButton";
import { ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-16 pb-20 sm:pt-24 sm:pb-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-chocolate leading-tight mb-6">
              Achadinhos para doceiras que querem <span className="text-sweet-pink">economizar</span>
            </h1>
            <p className="text-lg sm:text-xl text-chocolate-light mb-8 max-w-2xl">
              Entre no grupo Doceira Esperta e acompanhe ofertas de potinhos, embalagens, moldes, utensílios e produtos úteis para confeitaria.
            </p>
            
            <div className="flex flex-col items-center lg:items-start gap-4">
              <WhatsAppButton variant="hero" />
              <p className="text-sm text-chocolate-light/70 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                Grupo gratuito • Ofertas atualizadas • Confira antes de comprar
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-soft-pink rounded-full blur-2xl opacity-60 animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-sweet-pink rounded-full blur-3xl opacity-20" />
              
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform lg:rotate-3 transition-transform hover:rotate-0 duration-500">
                <Image
                  src="/hero-image.png"
                  alt="Bancada de Confeitaria"
                  width={600}
                  height={600}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-soft-pink rounded-full blur-3xl opacity-30" />
    </section>
  );
}
