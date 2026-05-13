import { Package, Shapes, Utensils, TrendingUp } from "lucide-react";

const features = [
  {
    title: "Embalagens e potinhos",
    description: "Copinhos, caixas, potes, marmitinhas e embalagens para seus doces.",
    icon: Package,
  },
  {
    title: "Moldes e formas",
    description: "Moldes de silicone, formas para chocolate, bombom, trufa e decoração.",
    icon: Shapes,
  },
  {
    title: "Utensílios de confeitaria",
    description: "Bicos de confeitar, sacos, espátulas, medidores e acessórios essenciais.",
    icon: Utensils,
  },
  {
    title: "Achadinhos para vender mais",
    description: "Produtos que ajudam na produção, apresentação e entrega dos doces.",
    icon: TrendingUp,
  },
];

export function FeatureCards() {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-chocolate mb-6">
            O que você encontra no grupo
          </h2>
          <div className="w-24 h-1 bg-pink-main mx-auto rounded-full opacity-30" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-10 rounded-[2.5rem] bg-white border border-border-soft shadow-[0_18px_50px_rgba(90,56,46,0.08)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-pink-soft text-pink-deep flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform shadow-sm">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-chocolate mb-4">{feature.title}</h3>
              <p className="text-chocolate-light leading-relaxed text-sm lg:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
