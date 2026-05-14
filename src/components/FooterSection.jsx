import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";

const LOGO_URL = "https://media.base44.com/images/public/user_69fc9558540b7aa71fe17203/afa5a974a_WhatsAppImage2026-05-05at182619.jpg";
const WHATSAPP_URL = "https://wa.me/5511925001459?text=Ol%C3%A1%2C%20Vim%20pelo%20site%20e%20gostaria%20de%20realizar%20um%20or%C3%A7amento!";

export default function FooterSection() {
  return (
    <footer id="localizacao" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            
            <img src={LOGO_URL} alt="JQM Automotive" className="h-20 w-auto object-contain mb-8" />

            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
              Entre em <span className="text-primary">contato</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-md">
              Fale com um de nossos atendentes e solicite o orçamento das peças que você precisa.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Telefone / WhatsApp</p>
                  <p className="text-foreground font-medium">(11) 92500-1459</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Localização</p>
                  <p className="text-foreground font-medium">Rua Kitaro Ywasa, 259 — Mauá, SP</p>
                </div>
              </div>
            </div>

<div className="flex flex-col gap-3 pt-4">

  <a
    href="https://instagram.com/jqm.automotive"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 text-gray-400 hover:text-red-500 transition-all duration-300"
  >
    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
      <MessageCircle className="w-4 h-4 text-primary" />
    </div>

    <div>
      <p className="text-xs text-gray-500 uppercase tracking-wider">
        Instagram
      </p>

      <p className="text-white font-medium">
        @jqm.automotive
      </p>
    </div>
  </a>

  <a
    href="mailto:contato@jqmautomotive.com"
    className="flex items-center gap-4 text-gray-400 hover:text-red-500 transition-all duration-300"
  >
    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
      <Mail className="w-4 h-4 text-primary" />
    </div>

    <div>
      <p className="text-xs text-gray-500 uppercase tracking-wider">
        E-mail
      </p>

      <p className="text-white font-medium">
        contato@jqmautomotive.com
      </p>
    </div>
  </a>

</div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase hover:bg-primary/90 transition-all duration-300">
              
              <MessageCircle className="w-4 h-4" />
              Fale Conosco
            </a>
          </motion.div>

          {/* Right - Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative">
            
            <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] bg-card border border-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0!2d-46.4611!3d-23.6678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6b0c5c1c5c5c%3A0x1!2sRua%20Kitaro%20Ywasa%2C%20259%20-%20Mau%C3%A1%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(1.1)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização" />
              
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} JQM Automotive — Peças Importadas de Performance
          </p>
          <p className="text-xs text-muted-foreground tracking-wider">
            Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>);

}