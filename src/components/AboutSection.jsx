import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Award } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511925001459?text=Ol%C3%A1%2C%20Vim%20pelo%20site%20e%20gostaria%20de%20realizar%20um%20or%C3%A7amento!";

const features = [
  {
    icon: Shield,
    title: "Peças Garantidas",
    description: "Novas e seminovas com procedência certificada",
  },
  {
    icon: Clock,
    title: "Atendimento Rápido",
    description: "Resposta ágil e personalizada via WhatsApp",
  },
  {
    icon: Award,
    title: "Desde 2025",
    description: "Experiência e qualidade comprovada no mercado premium",
  },
];

export default function AboutSection() {
  return (
    <section id="quem-somos" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
              Quem Somos
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight">
              Excelência e Procedência em
              <br />
              <span className="text-primary">peças importadas</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              A JQM Automotive atua no segmento de importação e venda de peças automotivas novas e{" "}
              <strong className="text-foreground">
                seminovas para veículos premium europeus, incluindo marcas como
              </strong>{" "}
              BMW, Mini Cooper, Audi, Mercedes-Benz, Land Rover, Volvo e Porsche.
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
Desde 2025, trabalhamos com foco em qualidade, confiança e atendimento diferenciado, oferecendo soluções para clientes que buscam excelência e performance para seus veículos.            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block px-8 py-4 bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase hover:bg-primary/90 transition-all duration-300"
            >
              Realizar Orçamento
            </a>
          </motion.div>

          {/* Right - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feat, i) => (
              <div
                key={feat.title}
                className="group flex items-start gap-5 p-6 bg-card border border-border hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 flex items-center justify-center">
                  <feat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-wide">{feat.title}</h3>
                  <p className="mt-1 text-muted-foreground text-sm">{feat.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}