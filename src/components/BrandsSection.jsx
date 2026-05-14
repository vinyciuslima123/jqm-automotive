import React from "react";
import { motion } from "framer-motion";

export default function BrandsSection({ brandImages }) {
  const brands = [
    { name: "Land Rover", image: brandImages.landRover },
    { name: "BMW", image: brandImages.bmw },
    { name: "Mercedes", image: brandImages.mercedes },
    { name: "Mini", image: brandImages.mini },
    { name: "Audi", image: brandImages.audi },
    { name: "Porsche", image: brandImages.porsche },
  ];

  return (
    <section id="especializacao" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
            Especialização Premium
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase tracking-tight">
            Marcas que <span className="text-primary">dominamos</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Expertise dedicada às marcas automotivas mais prestigiadas do mundo.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-[3/2] overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-500"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-wider">
                  {brand.name}
                </h3>
                <div className="mt-1 w-8 h-0.5 bg-primary group-hover:w-16 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}