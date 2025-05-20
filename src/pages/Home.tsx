import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import AnimatedSection from '../components/AnimatedSection';
import FloatingElement from '../components/FloatingElement';
import { floodImages } from '../data/floodData';

const Home: React.FC = () => {
  return (
    <div className="pt-0">
      {/* HERO */}
      <section id="home" className="pt-0">
        <ImageCarousel images={floodImages} />

        <AnimatedSection className="text-center py-16 px-4">
          <h1 className="text-green-400 font-mono text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Entendendo o impacto das enchentes.
          </h1>
          <p className="text-green-300/80 max-w-2xl mx-auto text-lg">
            Como alagamentos afetam vidas em comunidades vulneráveis e como a inteligência coletiva impulsiona soluções inclusivas contra o racismo ambiental.
          </p>
        </AnimatedSection>
      </section>

      {/* NARRATIVA LONGA SOBRE IMPACTOS */}
      <section className="py-1 px-4 bg-gray-950/0">
        <div className="max-w-5xl mx-auto space-y-6 text-green-300/70 text-justify text-base md:text-lg leading-relaxed">
          <p>
            Todos os anos o mapa do Brasil recebe novas manchas de tristeza quando frentes frias estacionam sobre cidades densas e rios transbordam além das margens. O relatório mais recente do Painel Intergovernamental sobre Mudança do Clima alerta que eventos de precipitação extrema já aumentaram em frequência e intensidade em toda a América do Sul tropical e subtropical. Esses episódios não aparecem como acidentes isolados mas como expressão de uma crise climática que acentua desigualdades históricas.
          </p>
          <p>
            Em fevereiro de 2022 por exemplo a cidade imperial de Petrópolis registrou sessenta centímetros de chuva em apenas três horas. Encostas saturadas cederam com força suficiente para soterrar ruas inteiras enquanto rios urbanos se transformavam em correntes que arrastaram veículos e demoliram mais de mil residências. Várias famílias ainda vivem em moradias temporárias e relatam perdas de documentos de trabalho escolas e vínculos comunitários que nunca retornaram ao estado anterior.
          </p>
          <p>
            Pouco mais ao sul no coração da Baixada Fluminense bairros como Saracuruna Jardim Gramacho e Belford Roxo convivem com inundações crônicas que se misturam a esgoto sem tratamento. Nesses locais é comum que a água barrenta permaneça dias sobre o solo criando o ambiente perfeito para leptospirose hepatite A e surtos de dengue. Pesquisas com dados do Sistema Único de Saúde mostram que quase dez por cento dos casos de leptospirose registrados entre 2015 e 2019 ocorreram em Belford Roxo demonstrando a correlação direta entre vulnerabilidade sanitária e exposição a cheias prolongadas.
          </p>
          <p>
            Já em abril e maio de 2024 as cheias históricas do Rio Grande do Sul atingiram dois terços dos municípios do estado deixando centenas de mortos e mais de meio milhão de pessoas longe de casa. Quilombos em Eldorado do Sul relataram a perda de plantações inteiras enquanto mulheres indígenas acolhidas em ginásios públicos denunciavam violência e falta de atendimento psicológico. O episódio expôs como raça gênero e renda definem quem recebe socorro primeiro e quem fica nas fileiras do fim.
          </p>
          <p>
            Além de destruir moradias as enchentes interrompem rotinas de estudo. Um levantamento do Centro Nacional de Monitoramento e Alertas de Desastres Naturais mostra que cerca de seis mil escolas brasileiras estão em áreas suscetíveis a desastres hidrológicos colocando milhões de crianças sob risco de evasão e traumas repetidos. Quando a água invade salas de aula muitas vezes o calendário letivo é reduzido ou transferido para prédios improvisados sem infraestrutura adequada.
          </p>
          <p>
            Diante desse cenário redes de solidariedade como a Visão Coop constroem inteligência coletiva para que o conhecimento circule na mesma velocidade que as águas. Oficinas comunitárias divulgam o Manual contra Enchentes que ensina desde a montagem de kits de primeiros socorros até técnicas de bioengenharia de margens. Articulações territoriais também pressionam por políticas como o conceito de Cidade Esponja aprovado no município do Rio de Janeiro que incentiva jardins de chuva e pavimentos permeáveis para reduzir alagamentos. Esse conjunto de respostas demonstra que enfrentar enchentes não é apenas obra de engenharia e sim um ato de justiça social em que cada voz importa.
          </p>
        </div>
      </section>

        {/* IMPACTO NAS COMUNIDADES */}
        <section className="py-20">
        <h2 className="text-green-400 font-mono text-3xl md:text-4xl font-bold text-center mb-12">
          Por que falar de enchentes?
        </h2>

        <div className="flex flex-col space-y-6">
          {/* Elemento 1 */}
          <FloatingElement position="center">
            <img src="https://jornal.usp.br/wp-content/uploads/20161219_00_enchente.jpg" alt="Comunidade alagada" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-green-400 font-mono text-xl mb-3">Impacto nas periferias</h3>
            <p className="text-white mb-4">
              No Brasil, milhões de pessoas vivem próximas a rios, canais e encostas sem infraestrutura adequada. Como resultado, cada chuva forte pode resultar em perdas materiais, contaminação da água e riscos à vida. Essas áreas concentram grande parte da população negra e periférica, revelando um padrão de <strong>racismo ambiental</strong> que precisa ser enfrentado.
            </p>
          </FloatingElement>

          {/* Elemento 2 */}
          <FloatingElement position="center">
            <img src="https://habitability.com.br/wp-content/uploads/2022/03/sirene.jpg" alt="Tecnologia comunitária" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-green-400 font-mono text-xl mb-3">Tecnologia & Inteligência Coletiva</h3>
            <p className="text-white mb-4">
              A Visão Coop integra sensores de baixo custo, dados participativos e modelos de IA em tempo real para identificar pontos críticos de alagamento e emitir alertas precoces. Esses dados são compartilhados em formatos abertos, convidando moradores, pesquisadores e gestores a aprimorar as soluções continuamente.
            </p>
          </FloatingElement>

          {/* Elemento 3 */}
          <FloatingElement position="center">
            <img src="https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2022/04/03/806x444/1__mg_3866-20801132.jpg" alt="Ação comunitária" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-green-400 font-mono text-xl mb-3">Participe da mudança</h3>
            <p className="text-white mb-4">
              Baixe o <em>Manual contra Enchentes</em>, contribua com novas práticas e participe das assembleias abertas da Visão Coop. Juntos, podemos transformar conhecimento local em políticas públicas e infraestrutura resiliente.
            </p>
          </FloatingElement>
        </div>
      </section>



      {/* INTELIGÊNCIA COLETIVA EM AÇÃO (NOVO LAYOUT) */}
      <section className="relative py-24">
      {/* Painel Lateral Fixo (aparece em telas grandes) */}

      {/* Conteúdo em Blocos Horizontais */}
      <div className="lg:ml-50 px-7">
        <h2 className="text-green-400 font-mono text-3xl md:text-4xl font-bold text-center mb-12">
          Tecnologias Comunitárias em Destaque
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Bloco 1 */}
          <div className="bg-gray-900/90 border border-green-500/30 rounded-lg p-6">
            <h4 className="text-green-400 font-mono text-xl mb-3">Bioengenharia de Margens</h4>
            <p className="text-white text-sm leading-relaxed">
              Plantio de espécies nativas nas bordas dos rios para reduzir erosão, filtrar sedimentos e diminuir a velocidade das águas. Inspirado no <em>Guia de Justiça Climática</em> da Casa Fluminense, esse método alia saberes tradicionais à ciência moderna.
            </p>
          </div>

          {/* Bloco 2 */}
          <div className="bg-gray-900/90 border border-green-500/30 rounded-lg p-6">
            <h4 className="text-green-400 font-mono text-xl mb-3">Kits de Primeiros Socorros</h4>
            <p className="text-white text-sm leading-relaxed">
              Pontos comunitários estocam curativos, antissépticos e lanternas para garantir resposta rápida nas primeiras 72&nbsp;h após a inundação. A logística distribuída reduz dependência de socorro externo.
            </p>
          </div>

          {/* Bloco 3 */}
          <div className="bg-gray-900/90 border border-green-500/30 rounded-lg p-6">
            <h4 className="text-green-400 font-mono text-xl mb-3">Válvulas Antirrefluxo</h4>
            <p className="text-white text-sm leading-relaxed">
              Moradores instalam dispositivos simples no encanamento doméstico para impedir o retorno de esgoto quando a rede pública transborda, evitando doenças de veiculação hídrica durante chuvas intensas.
            </p>
          </div>
        </div>
        </div>
        </section>

    </div>
  );
};

export default Home;