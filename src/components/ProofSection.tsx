import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Ideal para doceiras iniciantes",
  "Bom para quem vende por encomenda",
  "Ajuda a comparar preço e frete",
  "Foco em produtos de confeitaria e embalagem",
];

export function ProofSection() {
  return (
    <section className="py-20 bg-soft-pink/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-chocolate mb-6">
              Feito para quem trabalha com doces no dia a dia
            </h2>
            <p className="text-lg text-chocolate-light mb-8 leading-relaxed">
              Quem vende brigadeiro, bolo no pote, brownie, trufa, sobremesa no copinho ou lembrancinhas sabe que embalagem e utensílio pesam no custo. O grupo reúne achadinhos para facilitar essa busca e garantir que você tenha o melhor custo-benefício.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-chocolate font-medium">
                  <CheckCircle2 className="w-6 h-6 text-sweet-pink" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-xl border-2 border-sweet-pink/10">
              <h3 className="text-2xl font-bold text-chocolate mb-8 text-center italic">
                "A embalagem é o primeiro presente que seu cliente recebe."
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-sweet-pink font-bold text-xl shadow-inner">1</div>
                  <p className="text-chocolate-light">Economize tempo pesquisando em vários sites.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-sweet-pink font-bold text-xl shadow-inner">2</div>
                  <p className="text-chocolate-light">Descubra novos fornecedores e produtos inovadores.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-sweet-pink font-bold text-xl shadow-inner">3</div>
                  <p className="text-chocolate-light">Reduza seus custos e aumente seu lucro final.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
