import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Causes from './pages/Causes';
import Prevention from './pages/Prevention';
import Platforms from './pages/Platform';
import Testimonials from './pages/Testimonials';
import { MapPin, AlertTriangle, ShieldCheck, BookOpen, MessageSquare } from 'lucide-react';
import { Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nos" element={<About />} />
            <Route path="/causas" element={<Causes />} />
            <Route path="/prevencao" element={<Prevention />} />
            <Route path="/plataformas" element={<Platforms />} />
            <Route path="/testemunhas" element={<Testimonials />} />
          </Routes>
        </main>
        
        <footer className="bg-black border-t border-green-500/20 py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-green-400 font-mono text-xl font-bold tracking-wider mb-6">
              ENCHENTES<span className="text-green-500">INFO</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-green-400 font-mono text-lg mb-3">Links Rápidos</h3>
                <ul className="space-y-2">
                <li>
                  <a 
                    href="/sobre-nos"
                    className="text-white/70 hover:text-green-300 transition-colors flex items-center gap-2"
                  >
                    <BookOpen size={16} />
                    Sobre-nos
                  </a>
                </li>
                <li>
                  <a 
                    href="/causas"
                    className="text-white/70 hover:text-green-300 transition-colors flex items-center gap-2"
                  >
                    <AlertTriangle size={16} />
                    Causas
                  </a>
                </li>
                <li>
                  <a 
                    href="/prevencao"
                    className="text-white/70 hover:text-green-300 transition-colors flex items-center gap-2"
                  >
                    <ShieldCheck size={16} />
                    Prevenção
                  </a>
                </li>
                <li>
                  <a 
                    href="/testemunhas"
                    className="text-white/70 hover:text-green-300 transition-colors flex items-center gap-2"
                  >
                    <MessageSquare size={16} />
                    Testemunhas
                  </a>
                </li>
              </ul>
              </div>
              
              <div>
                <h3 className="text-green-400 font-mono text-lg mb-3">Inteligência Coletiva</h3>
                <ul className="space-y-2">
                  {[
                    { name: 'Redes de Conexão', href: '/plataformas' },
                  ].map((item) => (
                    <li key={item.name}>
                      <a 
                        href={item.href}
                        className="text-white/70 hover:text-green-300 transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-green-400 font-mono text-lg mb-3">
                  Acompanhe nosso trabalho
                </h3>

                <div className="flex space-x-4 mt-4">
                  {[
                    {
                      name: 'LinkedIn',
                      icon: Linkedin,
                      url: 'https://br.linkedin.com/company/visaocoop',
                    },
                    {
                      name: 'Facebook',
                      icon: Facebook,
                      url: 'https://www.facebook.com/visaocoop/',
                    },
                    {
                      name: 'Instagram',
                      icon: Instagram,
                      url: 'https://www.instagram.com/visaocoop/',
                    },
                    {
                      name: 'X',
                      icon: Twitter,
                      url: 'https://x.com/visaocoop',
                    },
                  ].map(({ name, icon: Icon, url }) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full
                                bg-green-500/10 hover:bg-green-500/20 transition-colors"
                      aria-label={name}
                    >
                      <Icon size={20} className="text-green-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-green-500/20 text-center text-white/50">
              <p>© {new Date().getFullYear()} Todos os direitos reservados a Visão Coop.</p>
              <p className="text-xs mt-2">Esse site é apenas um site educacional apartir de uma PEX.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;