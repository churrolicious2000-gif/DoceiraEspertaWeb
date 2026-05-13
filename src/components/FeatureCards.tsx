import { Package, Shapes, Utensils, TrendingUp } from "lucide-react";

const features = [
  {
    title: "Embalagens e potinhos",
    description: "Copinhos, caixas, potes, marmitinhas e embalagens para seus doces.",
    icon: Package,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Moldes e formas",
    description: "Moldes de silicone, formas para chocolate, bombom, trufa e decoração.",
    icon: Shapes,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Utensílios de confeitaria",
    description: "Bicos de confeitar, sacos, espátulas, medidores e acessórios essenciais.",
    icon: Utensils,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Achadinhos para vender mais",
    description: "Produtos que ajudam na produção, apresentação e entrega dos doces.",
    icon: TrendingUp,
    color: "bg-green-100 text-green-600",
  },
];

export function FeatureCards() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-chocolate mb-6">
            O que você encontra no grupo
          </h2>
          <div className="w-24 h-1 bg-primary-pink mx-auto rounded-full opacity-30" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-10 rounded-[2.5rem] bg-cream-light border border-border-soft/50 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform shadow-sm`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-chocolate mb-4">{feature.title}</h3>
              <p className="text-soft-brown leading-relaxed text-sm lg:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
