/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  Instagram, 
  MessageCircle, 
  ChevronRight, 
  Star, 
  ShieldCheck, 
  Zap, 
  Info,
  X,
  MapPin
} from 'lucide-react';

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=16993724649&text=Ol%C3%A1%20Dr.%20Luan,%20gostaria%20de%20agendar%20uma%20consulta%20gratuita.&type=phone_number&app_absent=0";

const RESULTS_IMAGES = [
  "https://i.imgur.com/Ex7IN6G.jpeg",
  "https://i.imgur.com/th5wR1L.jpeg",
  "https://i.imgur.com/TlhEhSP.jpeg",
  "https://i.imgur.com/fivw2sw.jpeg",
  "https://i.imgur.com/CF2STPJ.jpeg",
  "https://i.imgur.com/4tzhGVJ.jpeg",
  "https://i.imgur.com/dY6pDXg.png",
  "https://i.imgur.com/qtgqvea.png"
];

const GALLERY_IMAGES = [
  "https://i.imgur.com/kj7mw6o.png",
  "https://i.imgur.com/tCUmskl.jpeg"
];

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen selection:bg-brand-accent/30">
      {/* Header / Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-primary/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold tracking-tight">LUAN SOARES</span>
            <span className="hidden sm:inline-block w-px h-4 bg-brand-primary/20"></span>
            <span className="hidden sm:inline-block text-xs uppercase tracking-widest opacity-60">Odontologia</span>
          </div>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-brand-accent transition-colors flex items-center gap-1"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Agendar Consulta</span>
          </a>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://i.imgur.com/aiZy5Jz.png" 
              alt="Dr. Luan Soares" 
              className="w-full h-full object-cover object-center opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/60 to-transparent"></div>
          </div>

          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="inline-block px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                Franca • SP
              </span>
              <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6">
                Eu sou Luan Soares, <br />
                <span className="italic text-brand-accent">Dentista em Franca</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-primary/80 mb-10 leading-relaxed">
                Te ajudo a conquistar um sorriso bonito, saudável e natural com segurança e atendimento personalizado.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-brand-primary text-white rounded-full font-medium overflow-hidden transition-all hover:shadow-xl hover:shadow-brand-primary/20 active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Agendar primeira consulta gratuita
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold flex items-center gap-2">
                    <Zap className="w-4 h-4 text-brand-accent fill-brand-accent" />
                    Resposta rápida
                  </span>
                  <span className="text-xs opacity-60">Sem compromisso</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://i.imgur.com/tCUmskl.jpeg" 
                    alt="Dr. Luan Soares Atendimento" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 glass-card p-8 rounded-2xl hidden lg:block">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex text-brand-accent">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <span className="text-sm font-bold">Avaliação 5.0</span>
                  </div>
                  <p className="text-xs opacity-70 italic">"Atendimento impecável e resultado natural."</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-serif mb-8">Quem sou eu</h2>
                <p className="text-lg text-brand-primary/70 mb-10 leading-relaxed">
                  Eu acredito que cada sorriso é único. Meu trabalho é entender o que você realmente precisa e entregar um resultado natural, seguro e que te faça se sentir confiante.
                </p>

                <ul className="space-y-6">
                  {[
                    "Atendimento direto comigo",
                    "Avaliação honesta e sem pressão",
                    "Foco em estética natural",
                    "Explicação clara de todo o processo"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-brand-accent" />
                      </div>
                      <span className="font-medium text-brand-primary/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results Grid */}
        <section className="py-24 bg-brand-bg">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Resultados Reais</h2>
              <p className="text-brand-primary/60 max-w-xl mx-auto">
                Transformações que priorizam a harmonia e a saúde bucal de cada paciente.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {RESULTS_IMAGES.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setSelectedImage(src)}
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-zoom-in bg-white"
                >
                  <img 
                    src={src} 
                    alt={`Resultado ${i + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <ChevronRight className="w-5 h-5 text-brand-primary" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <p className="mt-8 text-center text-xs text-brand-primary/40 flex items-center justify-center gap-2">
              <Info className="w-3 h-3" />
              Resultados podem variar de pessoa para pessoa.
            </p>
          </div>
        </section>

        {/* Features / Why Trust */}
        <section className="py-24 bg-brand-primary text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/3">
                <h2 className="text-4xl md:text-5xl font-serif mb-6">Por que confiar em mim?</h2>
                <p className="text-white/60 mb-8">
                  Compromisso com a verdade e com a melhor tecnologia para o seu caso.
                </p>
                <div className="w-20 h-1 bg-brand-accent"></div>
              </div>

              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Atendimento humano e direto", icon: <Star className="w-5 h-5" /> },
                  { title: "Foco em resultado natural", icon: <ShieldCheck className="w-5 h-5" /> },
                  { title: "Sem promessas irreais", icon: <Info className="w-5 h-5" /> },
                  { title: "Clareza em cada etapa", icon: <Check className="w-5 h-5" /> },
                  { title: "Tecnologia atualizada", icon: <Zap className="w-5 h-5" /> }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="text-brand-accent mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-medium">{feature.title}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Como funciona</h2>
              <p className="text-brand-primary/60">O caminho para o seu novo sorriso em 3 passos simples.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Connector line */}
              <div className="absolute top-1/2 left-0 w-full h-px bg-brand-primary/5 hidden md:block -translate-y-1/2"></div>
              
              {[
                { step: "1", text: "Você me chama no WhatsApp" },
                { step: "2", text: "Agendamos sua consulta" },
                { step: "3", text: "Faço sua avaliação gratuita" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-bg border-4 border-white shadow-xl flex items-center justify-center text-2xl font-serif font-bold text-brand-accent mb-6">
                    {item.step}
                  </div>
                  <p className="text-lg font-medium max-w-[200px]">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery / Behind the scenes */}
        <section className="py-24 bg-brand-bg">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif mb-4">Mais sobre meu trabalho</h2>
                <p className="text-brand-primary/60">Acompanhe os bastidores e o dia a dia no consultório.</p>
              </div>
              <a 
                href="https://www.instagram.com/drluansoares/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-accent font-bold uppercase tracking-widest text-xs hover:opacity-70 transition-opacity"
              >
                <Instagram className="w-4 h-4" />
                Ver no Instagram
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {GALLERY_IMAGES.map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="aspect-video rounded-3xl overflow-hidden shadow-lg bg-white"
                >
                  <img 
                    src={src} 
                    alt={`Galeria ${i + 1}`} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-primary z-0">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
                Agende sua primeira consulta gratuita agora
              </h2>
              <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
                Sem compromisso. Apenas uma avaliação honesta para entendermos o melhor caminho para o seu sorriso.
              </p>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-brand-accent text-brand-primary rounded-full font-bold text-lg hover:bg-white transition-all hover:shadow-2xl hover:shadow-brand-accent/20 active:scale-95"
              >
                <MessageCircle className="w-6 h-6" />
                Quero agendar no WhatsApp
              </a>
              <div className="mt-8 flex items-center justify-center gap-6 text-white/40 text-sm">
                <span className="flex items-center gap-2"><Check className="w-4 h-4" /> Avaliação Gratuita</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4" /> Franca SP</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-brand-primary/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="font-serif text-xl font-bold mb-1">Luan Soares</p>
            <p className="text-sm text-brand-primary/60 flex items-center justify-center md:justify-start gap-1">
              <MapPin className="w-3 h-3" />
              Dentista • Franca SP
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <a 
              href="https://www.instagram.com/drluansoares/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-primary/60 hover:text-brand-accent transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary/60 hover:text-brand-accent transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>

          <p className="text-xs text-brand-primary/40">
            © {new Date().getFullYear()} Dr. Luan Soares. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-brand-primary/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Visualização ampliada" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
