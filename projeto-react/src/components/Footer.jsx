// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-ink text-bone border-t border-white/10 mt-24">
      <div className="px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="font-display text-3xl italic mb-4">
            VOLT<span className="text-volt">.</span>
          </h2>
          <p className="text-concrete text-sm max-w-xs">
            Tênis feitos pra quem não desacelera.
          </p>
        </div>
        <div>
          <h3 className="font-body text-xs uppercase tracking-widest text-concrete mb-4">Navegue</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-volt transition">Home</a></li>
            <li><a href="/produtos" className="hover:text-volt transition">Produtos</a></li>
            <li><a href="/contato" className="hover:text-volt transition">Contato</a></li>
            <li><a href="/login" className="hover:text-volt transition">Login</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-body text-xs uppercase tracking-widest text-concrete mb-4">Categorias</h3>
          <ul className="space-y-2 text-sm text-bone/80">
            <li>Corrida</li>
            <li>Casual</li>
            <li>Basquete</li>
          </ul>
        </div>
        <div>
          <h3 className="font-body text-xs uppercase tracking-widest text-concrete mb-4">Fique por dentro</h3>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="seu@email.com"
              className="bg-transparent border border-white/20 rounded-full px-4 py-2 text-sm flex-1 focus:outline-none focus:border-volt"
            />
            <button className="bg-volt text-ink font-semibold text-sm px-4 py-2 rounded-full">OK</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 md:px-12 py-6 text-xs text-concrete flex flex-col md:flex-row justify-between gap-2">
        <span>© 2026 VOLT. Todos os direitos reservados.</span>
        <span>Feito com React + Tailwind</span>
      </div>
    </footer>
  );
}