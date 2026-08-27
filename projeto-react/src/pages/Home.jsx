// src/pages/Home.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const imagensHero = [
  "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1600",
  "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1600",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600",
  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1600",
  "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1600",
];

export default function Home() {
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceAtual((prev) => (prev + 1) % imagensHero.length);
    }, 4000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="bg-ink text-bone">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {imagensHero.map((img, index) => (
          <img
            key={img}
            src={img}
            alt="Tênis em destaque"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === indiceAtual ? "opacity-40" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="absolute -right-24 top-0 h-full w-64 bg-volt/90 -skew-x-12 hidden lg:block" />

        <div className="relative z-10 px-6 md:px-12 max-w-3xl">
          <span className="font-mono text-volt text-xs tracking-[0.3em] uppercase">
            Nova coleção — Drop 04
          </span>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.9] uppercase mt-4">
            Não pare.<br /><span className="text-volt">Ultrapasse.</span>
          </h1>
          <p className="mt-6 text-lg text-bone/70 max-w-md">
            Tênis desenhados pra quem treina antes do sol nascer.
          </p>
          
            <a href="#mais-vendidos"
            className="inline-block mt-10 bg-volt text-ink font-display text-lg uppercase px-10 py-4 rounded-full hover:bg-bone transition"
          >
            Ver Coleção
          </a>

          {/* Indicadores do carrossel */}
          <div className="flex gap-2 mt-12">
            {imagensHero.map((_, index) => (
              <button
                key={index}
                onClick={() => setIndiceAtual(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === indiceAtual ? "w-8 bg-volt" : "w-1.5 bg-bone/30"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section id="mais-vendidos" className="py-24 px-6 md:px-12 scroll-mt-20">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-display text-4xl md:text-5xl uppercase">Mais vendidos</h2>
          <Link
            to="/corrida"
            className="font-mono text-xs uppercase tracking-widest text-volt hover:underline"
          >
            Ver todos →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="bg-white/5 rounded-xl overflow-hidden aspect-square">
                <img
                  src={`https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&sig=${item}`}
                  alt="Tênis"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="font-semibold text-lg">Modelo Runner {item}</h3>
                <span className="font-mono text-volt">R$ 599,90</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}