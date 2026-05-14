import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5511925001459?text=Ol%C3%A1%2C%20Vim%20pelo%20site%20e%20gostaria%20de%20realizar%20um%20or%C3%A7amento!";

const CATEGORIES = [
  {
    id: "motor",
    label: "Motor",
    parts: [
      "Jogo de Junta", "Bronzinas", "Anéis de Segmento", "Cabeçote",
      "Pistões", "Motor Parcial", "Polia Comando", "Virabrequim",
      "C. de Distribuição", "Bomba de Óleo", "Bomba de Água",
      "Bloco Cilindro", "Válvula Termostática",
    ],
  },
  {
    id: "injecao",
    label: "Injeção",
    parts: [
      "Bico Injetor", "Velas", "Bobinas",
      "Bomba de Alta Pressão", "Bomba Combustível",
    ],
  },
  {
    id: "freio",
    label: "Freio",
    parts: [
      "Pastilhas de Freio", "Discos de Freio",
      "Sensor de Desgaste de Pastilha",
    ],
  },
  {
    id: "suspensao",
    label: "Suspensão",
    parts: [
      "Amortecedores", "Kit Amortecedores", "Coxim Amortecedor",
      "Braços Suspensão", "Buchas de Suspensão", "Cubo de Roda",
    ],
  },
];

export default function PartsSection({ partImages }) {
  const [activeCategory, setActiveCategory] = useState("motor");
  const active = CATEGORIES.find((c) => c.id === activeCategory);

  const categoryImages = {
    motor: partImages.engine,
    injecao: partImages.injection,
    freio: partImages.brake,
    suspensao: partImages.suspension,
  };

  return (
    <section id="pecas" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
            Catálogo
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase tracking-tight">
            Peças <span className="text-primary">disponíveis</span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Parts Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Image */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={categoryImages[activeCategory]}
                  alt={active.label}
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                    Peças para
                    <br />
                    <span className="text-primary">{active.label}</span>
                  </h3>
                </div>
              </div>

              {/* Parts List */}
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {active.parts.map((part, i) => (
                    <motion.div
                      key={part}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-center gap-3 p-4 bg-background border border-border hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                      <span className="text-sm font-medium tracking-wide">{part}</span>
                    </motion.div>
                  ))}
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block px-8 py-4 bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase hover:bg-primary/90 transition-all duration-300"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}