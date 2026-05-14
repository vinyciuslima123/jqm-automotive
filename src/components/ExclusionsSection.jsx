import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Truck, Car, Bus } from "lucide-react";

const exclusions = [
  { icon: Truck, label: "Peças para Caminhões" },
  { icon: Car, label: "Peças para Nacionais" },
  { icon: Bus, label: "Peças para Vans" },
];

export default function ExclusionsSection() {
  return (
    <section className="py-16 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold tracking-[0.3em] uppercase text-primary">
              Atenção
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
            Não trabalhamos com:
          </h3>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {exclusions.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 p-6 bg-card border border-border/50"
            >
              <item.icon className="w-8 h-8 text-muted-foreground" />
              <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}