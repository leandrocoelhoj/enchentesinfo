import React from 'react';
import InfoSection from '../components/InfoSection';
import AnimatedSection from '../components/AnimatedSection';
import { aboutContent } from '../data/floodData';

// Imagem da equipe (salve o JPEG do Estadão como team-hero.jpg em src/assets/)

const About: React.FC = () => {
  return (
    <div className="pt-0">
      {/* HERO COM IMAGEM DA EQUIPE */}
      <section className="relative w-full h-[75vh] -mt-16 md:-mt-20 mb-0 pb-0 overflow-hidden">
        <img
          src="https://www.estadao.com.br/resizer/v2/3MGOEME2JNENHDVQZX67IOJBOI.JPEG?quality=80&auth=56d824a4e56859e486b87cbb2cf02063e3be53d242fc5c28baf88f62e42e0015&width=380"
          alt="Equipe completa da Visão Coop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <h1 className="text-green-400 font-mono text-3xl md:text-5xl lg:text-6xl font-bold text-center px-4">
            Conheça quem constrói a Visão Coop
          </h1>
        </div>
      </section>

      {/* SOBRE A VISÃO COOP (flutuando) */}
      <AnimatedSection delay={0.1} className="-mt-24 md:-mt-32 px-4">
        <InfoSection
          id="sobre-nos"
          title="Sobre a Visão Coop"
          content={aboutContent}
        />
      </AnimatedSection>


      {/* ATUAÇÃO EM ENCHENTES (flutuando) */}
      <AnimatedSection delay={0.3} className="-mt-24 md:-mt-32 px-4">
        <h2 className="text-green-400 font-mono text-3xl md:text-4xl font-bold text-center mb-8">
          Atuação em Enchentes
        </h2>
        <div className="max-w-4xl mx-auto space-y-6 text-green-300/90 text-justify text-base leading-relaxed">
          <p>
            Desde dois mil e vinte a Visão Coop coordena brigadas comunitárias que monitoram chuvas na Baixada Fluminense, desenvolvendo sensores de baixo custo e dashboards abertos para alertas rápidos. O "Manual contra Enchentes", fruto dessa experiência, já foi baixado por milhares de famílias.
          </p>
          <p>
            Parcerias com organizações como a Casa Fluminense impulsionam políticas de justiça climática e capacitam moradores para instalar jardins de chuva, válvulas antirrefluxo e sistemas de reuso de água, reduzindo riscos sanitários e econômicos após eventos extremos.
          </p>
        </div>
      </AnimatedSection>

        {/* CHAMADA PARA CONHECER A EQUIPE */}
        <AnimatedSection delay={0.2} className="py-8 px-4 bg-gray-950/600">
        <h2 className="text-green-400 font-mono text-3xl md:text-4xl font-bold text-center mb-8">
          Nossa Equipe
        </h2>
        <p className="text-green-300/90 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
          A Visão Coop reúne profissionais, pesquisadores e lideranças comunitárias que combinam ciência, arte e tecnologia para enfrentar o racismo ambiental. Cada projeto nasce da troca de experiências entre moradores de territórios vulneráveis e especialistas de diferentes áreas.
        </p>
        <div className="flex justify-center">
          <a
            href="https://visao.coop/equipe/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500/80 hover:bg-green-500 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors"
          >
            Conheça a equipe completa
          </a>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default About;