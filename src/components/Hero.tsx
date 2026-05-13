import Image from "next/image";
import { WhatsAppButton } from "./WhatsAppButton";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-12 pb-20 sm:pt-20 sm:pb-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-soft-pink/30 text-dark-pink text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              Ideal para doceiras e confeiteiras
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-chocolate leading-[1.1] mb-8">
              Achadinhos para doceiras que querem <span className="text-primary-pink">economizar</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-soft-brown mb-10 max-w-2xl leading-relaxed">
              Entre no grupo Doceira Esperta e acompanhe ofertas de embalagens, potinhos, moldes, utensílios e achadinhos para confeitaria.
            </p>
            
            <div className="flex flex-col items-center lg:items-start gap-6">
              <WhatsAppButton variant="hero" />
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-soft-brown font-medium">
                <span className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-pink" />
                  Grupo gratuito
                </span>
                <span className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-pink" />
                  Ofertas atualizadas
                </span>
                <span className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-pink" />
                  Confira antes de comprar
                </span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              {/* Decorative blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-soft-pink/20 rounded-full blur-3xl -z-10" />
              
              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(107,70,55,0.15)] border-[12px] border-white transform lg:rotate-2 transition-transform hover:rotate-0 duration-700">
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
      
      {/* Delicate background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cream-light rounded-full blur-[120px] opacity-60 -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-soft-pink/10 rounded-full blur-[100px] opacity-40 -z-10" />
    </section>
  );
}
