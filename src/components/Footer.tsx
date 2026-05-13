export function Footer() {
  return (
    <footer className="bg-chocolate py-12 text-cream">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">Doceira Esperta | Achadinhos para Confeitaria</h3>
        <p className="max-w-2xl mx-auto opacity-70 text-sm mb-8 leading-relaxed">
          O Doceira Esperta é um serviço gratuito de curadoria de ofertas. Não garantimos preços e não somos responsáveis pela venda ou entrega dos produtos anunciados. Compare sempre preço, frete, avaliações e quantidade antes de comprar.
        </p>
        
        <div className="w-full h-px bg-cream/10 mb-8" />
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-xs opacity-50">
          <p>© {new Date().getFullYear()} Doceira Esperta. Todos os direitos reservados.</p>
          <span className="hidden sm:inline">•</span>
          <p>Feito com ❤️ para confeiteiras de todo o Brasil.</p>
        </div>
      </div>
    </footer>
  );
}
