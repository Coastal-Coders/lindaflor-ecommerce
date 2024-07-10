'use client';
import React from 'react';

const About = () => {
  return (
    <main className='w-full items-center justify-center space-y-6 px-2 text-justify md:m-4 md:w-2/3 lg:w-1/2'>
      <section className='space-y-1 lg:space-y-2'>
        <h1 className='text-xl font-semibold lg:text-2xl'>Sobre Nós</h1>
        <p className='text-base lg:text-lg'>
          Bem-vindo à Linda Flor, a sua loja especializada em biquínis de alta qualidade! Oferecemos
          uma ampla variedade de biquínis que combinam estilo, conforto e durabilidade, perfeitos
          para todas as ocasiões, desde um dia relaxante na praia até uma festa na piscina. Nosso
          compromisso é proporcionar a você peças que realcem sua beleza e confiança.
        </p>
      </section>
      <section className='space-y-1 lg:space-y-2'>
        <h1 className='text-xl font-semibold lg:text-2xl'>Atacado e Varejo</h1>
        <p className='text-base lg:text-lg'>
          Atendemos tanto clientes que buscam compras no varejo quanto aqueles que precisam de
          grandes quantidades no atacado. Seja para você, para sua loja ou para seu evento,
          garantimos a mesma qualidade superior e atendimento personalizado em cada pedido.
        </p>
      </section>
      <section className='space-y-1 lg:space-y-2'>
        <h1 className='text-xl font-semibold lg:text-2xl'>Sob Encomenda</h1>
        <p className='text-base lg:text-lg'>
          Além da nossa coleção regular, oferecemos a opção de biquínis sob encomenda, feitos
          exclusivamente para você. Personalize seu biquíni escolhendo modelos, cores, tecidos e
          detalhes que mais combinam com seu estilo. Nossa equipe de designers está pronta para
          transformar suas ideias em realidade, criando peças únicas que se ajustam perfeitamente ao
          seu corpo.
        </p>
      </section>
      <section className='space-y-1 lg:space-y-2'>
        <h1 className='text-xl font-semibold lg:text-2xl'>Nosso Compromisso</h1>
        <p className='text-base lg:text-lg'>
          Na Linda Flor, a satisfação do cliente é nossa prioridade. Trabalhamos com os melhores
          materiais e seguimos as tendências da moda praia para garantir que você sempre encontre
          algo que ama. Explore nossa coleção e descubra o biquíni perfeito para você!
        </p>
      </section>
      <h3 className='text-xl font-semibold'>
        Visite nossa loja ou entre em contato conosco para mais informações sobre nossos produtos e
        serviços. Estamos ansiosos para atendê-lo!
      </h3>
    </main>
  );
};

export default About;
