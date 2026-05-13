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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-chocolate mb-4">
            O que você encontra no grupo
          </h2>
          <div className="w-20 h-1.5 bg-sweet-pink mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-3xl bg-cream border border-soft-pink shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-chocolate mb-3">{feature.title}</h3>
              <p className="text-chocolate-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
