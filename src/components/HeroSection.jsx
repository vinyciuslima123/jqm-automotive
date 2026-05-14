import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511925001459?text=Ol%C3%A1%2C%20Vim%20pelo%20site%20e%20gostaria%20de%20realizar%20um%20or%C3%A7amento!";

export default function HeroSection({ heroImage }) {
  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Carro importado premium"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="text-foreground font-inter font-black uppercase whitespace-nowrap"
          style={{ fontSize: "20vw", letterSpacing: "0.05em" }}
        >
          JQM
        </motion.span>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
            Peças Importadas de Performance
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tight">
            <span className="text-foreground">JQM</span>
            <br />
            <span className="text-primary">Automotive</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Transparência e segurança para o seu carro importado. Peças novas e seminovas para veículos premium europeus.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#pecas"
              className="group px-8 py-4 bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase hover:bg-primary/90 transition-all duration-300"
            >
              Explorar Peças
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-foreground/20 text-foreground text-sm font-bold tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300"
            >
              Solicitar Orçamento
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#quem-somos" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
}