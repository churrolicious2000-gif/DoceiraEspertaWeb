export function Footer() {
  return (
    <footer className="bg-chocolate py-16 text-cream-light">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-serif font-bold mb-6">Doceira Esperta | Achadinhos para Confeitaria</h3>
        <p className="max-w-3xl mx-auto opacity-70 text-sm lg:text-base mb-10 leading-relaxed font-medium">
          O Doceira Esperta é um serviço gratuito de curadoria de ofertas. Não garantimos preços e não somos responsáveis pela venda ou entrega dos produtos anunciados. Compare sempre preço, frete, avaliações e quantidade antes de comprar.
        </p>
        
        <div className="w-full h-px bg-cream-light/10 mb-10" />
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 text-xs lg:text-sm opacity-50 font-medium">
          <p>© {new Date().getFullYear()} Doceira Esperta. Todos os direitos reservados.</p>
          <span className="hidden sm:inline">•</span>
          <p>Feito com carinho para confeiteiras de todo o Brasil. 🍰</p>
        </div>
      </div>
    </footer>
  );
}
