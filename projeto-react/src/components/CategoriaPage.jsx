// src/components/CategoriaPage.jsx
import { useState } from "react";
import produtos from "../data/produtos";

export default function CategoriaPage({ categoria, titulo, subtitulo }) {
  const [ordem, setOrdem] = useState("relevancia");

  const itens = produtos
    .filter((p) => p.categoria === categoria)
    .sort((a, b) => {
      if (ordem === "menor") return a.preco - b.preco;
      if (ordem === "maior") return b.preco - a.preco;
      return 0;
    });

  return (
    <div className="bg-ink min-h-screen text-bone">
      {/* Cabeçalho da categoria */}
      <div className="px-6 md:px-12 pt-16 pb-10">
        <span className="font-mono text-volt text-xs uppercase tracking-[0.3em]">
          {subtitulo}
        </span>
        <h1 className="font-display text-5xl md:text-6xl uppercase mt-2">
          {titulo}
        </h1>
      </div>

      {/* Grid de produtos */}
      <div className="px-6 md:px-12 pb-20">
        <div className="flex justify-end mb-8">
          <select
            value={ordem}
            onChange={(e) => setOrdem(e.target.value)}
            className="bg-white/5 border border-white/15 rounded-full px-4 py-2 text-sm font-mono uppercase text-bone focus:outline-none focus:border-volt"
          >
            <option value="relevancia" className="text-ink">Relevância</option>
            <option value="menor" className="text-ink">Menor preço</option>
            <option value="maior" className="text-ink">Maior preço</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {itens.map((p) => (
            <div
              key={p.id}
              className="bg-neutral-900 rounded-2xl border border-white/5 hover:border-volt/40 transition-colors p-4 flex flex-col"
            >
              <div className="bg-neutral-800 rounded-xl overflow-hidden aspect-square mb-4">
                <img
                  src={p.img}
                  alt={p.nome}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="font-semibold text-base text-bone">{p.nome}</h3>
              <p className="text-neutral-400 text-sm mt-1 flex-1">{p.tagline}</p>
              <div className="flex items-center justify-between mt-3 mb-3">
                <span className="font-mono font-semibold text-volt">
                  R$ {p.preco.toFixed(2).replace(".", ",")}
                </span>
              </div>
              <button className="w-full bg-bone text-ink text-sm font-semibold uppercase py-2.5 rounded-full hover:bg-volt transition">
                Comprar
              </button>
            </div>
          ))}
        </div>

        {itens.length === 0 && (
          <p className="text-neutral-400 mt-10">Nenhum produto encontrado.</p>
        )}
      </div>
    </div>
  );
}