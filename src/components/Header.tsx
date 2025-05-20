import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="px-6 py-4 flex justify-between items-center bg-transparent">
      <Link
          to="/"
          className="text-green-400 font-mono text-xl font-bold tracking-wider hover:text-green-300 transition-colors"
        >
          ENCHENTES<span className="text-green-500">INFO</span>
        </Link>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-green-400 hover:text-green-300 transition-colors"
          aria-label="Toggle menu"
        >
          <Menu size={28} />
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="absolute top-full right-0 w-64 bg-black/90 border border-green-500/30 backdrop-blur-sm">
          <nav className="py-4">
          <ul className="space-y-3">
            <li>
              <a 
                href="/"
                className="block px-6 py-2 text-green-400 hover:bg-green-500/10 hover:text-green-300 transition-colors font-mono"
                onClick={() => setIsMenuOpen(false)}
              >
                Página Principal
              </a>
            </li>
            <li>
              <a 
                href="/sobre-nos"
                className="block px-6 py-2 text-green-400 hover:bg-green-500/10 hover:text-green-300 transition-colors font-mono"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </a>
            </li>
            <li>
              <a 
                href="/causas"
                className="block px-6 py-2 text-green-400 hover:bg-green-500/10 hover:text-green-300 transition-colors font-mono"
                onClick={() => setIsMenuOpen(false)}
              >
                Causas
              </a>
            </li>
            <li>
              <a 
                href="/prevencao"
                className="block px-6 py-2 text-green-400 hover:bg-green-500/10 hover:text-green-300 transition-colors font-mono"
                onClick={() => setIsMenuOpen(false)}
              >
                Prevenção
              </a>
            </li>
            <li>
              <a 
                href="/testemunhas"
                className="block px-6 py-2 text-green-400 hover:bg-green-500/10 hover:text-green-300 transition-colors font-mono"
                onClick={() => setIsMenuOpen(false)}
              >
                Testemunhas
              </a>
            </li>
            <li>
              <a 
                href="/plataformas"
                className="block px-6 py-2 text-green-400 hover:bg-green-500/10 hover:text-green-300 transition-colors font-mono"
                onClick={() => setIsMenuOpen(false)}
              >
                Redes de Conexão
              </a>
            </li>
          </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;