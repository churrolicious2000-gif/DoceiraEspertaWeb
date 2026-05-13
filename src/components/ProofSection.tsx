import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Ideal para doceiras iniciantes",
  "Bom para quem vende por encomenda",
  "Ajuda a comparar preço e frete",
  "Foco em produtos de confeitaria e embalagem",
];

export function ProofSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-chocolate mb-8 leading-tight">
              Feito para quem trabalha com doces no dia a dia
            </h2>
            <p className="text-lg text-soft-brown mb-10 leading-relaxed">
              Quem vende brigadeiro, bolo no pote, brownie, trufa, sobremesa no copinho ou lembrancinhas sabe que embalagem e utensílio pesam no custo. O grupo reúne achadinhos para facilitar essa busca e garantir que você tenha o melhor custo-benefício para profissionalizar sua marca.
            </p>
            
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-4 text-chocolate font-semibold">
                  <div className="w-6 h-6 rounded-full bg-soft-pink flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-dark-pink" />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-10 sm:p-14 rounded-[3rem] shadow-2xl shadow-chocolate/5 border border-border-soft/30 relative">
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-soft-pink/50 rounded-full blur-xl" />
              
              <h3 className="text-2xl lg:text-3xl font-serif font-bold text-chocolate mb-10 text-center italic leading-snug">
                "A embalagem é o primeiro presente que seu cliente recebe."
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-xl bg-cream-light border border-soft-pink/30 flex items-center justify-center text-primary-pink font-bold shrink-0 shadow-sm">1</div>
                  <p className="text-soft-brown text-base">Economize tempo pesquisando em vários sites e comparando fretes.</p>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-xl bg-cream-light border border-soft-pink/30 flex items-center justify-center text-primary-pink font-bold shrink-0 shadow-sm">2</div>
                  <p className="text-soft-brown text-base">Descubra novos fornecedores e produtos que diferenciam seu trabalho.</p>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-xl bg-cream-light border border-soft-pink/30 flex items-center justify-center text-primary-pink font-bold shrink-0 shadow-sm">3</div>
                  <p className="text-soft-brown text-base">Reduza seus custos de produção e aumente sua margem de lucro real.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
