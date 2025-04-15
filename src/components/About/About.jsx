import React from 'react'
import { useInView } from 'react-intersection-observer'
import Cards from './Cards'
import about from '../../assets/about.jpg';
import setaAmarela from '../../assets/seta-amarela.png';

export default function About() {

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section
      ref={ref}
      id="empresa"
      className={`bg-[#6c6c6b11] transition-all duration-700 relative ${inView ? 'fade-in' : 'opacity-0'}`}
      aria-labelledby="titulo-empresa"
    >
      <div className="max-w-6xl mx-auto">
        <div className="py-32 flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start lg:justify-items-end">

          <article className="px-4 flex flex-col gap-6">
            <header>
              <h2 id="titulo-empresa" className="text-4xl font-lekton tracking-widest uppercase">
                Empresa
              </h2>
            </header>

            <div className="w-full h-0.5 bg-[#d3d32c]" />

            <h3 className="text-2xl font-lekton tracking-wider font-semibold">
              Especialistas em compra de precatórios
            </h3>

            <p className="font-roboto text-sm/7 lg:text-balance tracking-wider">
              Somos especialistas na compra de precatórios e ajudamos você que não quer mais esperar.
              Com a gente, você tem uma negociação
              <b className="text-[#d3d32c] uppercase"> rápida</b>,
              <b className="text-[#d3d32c] uppercase"> segura</b> e
              <b className="text-[#d3d32c] uppercase"> transparente</b>,
              com a melhor proposta do mercado, condições justas e sem burocracia.
            </p>

            <Cards inView={inView} />

            <div className="flex items-center justify-center">
              <a
                href="https://api.whatsapp.com/send?phone=5521967799759"
                target="_blank"
                rel="noreferrer"
                title="Fale conosco pelo WhatsApp"
              >
                <button className="bg-[#d3d32c] hover:bg-[#d32a6f] hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out hover:text-white px-8 py-3 rounded-md text-[#232323] uppercase font-lekton font-bold text-xl tracking-wide hover:underline">
                  Fale Conosco
                </button>
              </a>
            </div>
          </article>

          <figure className="rounded w-full md:w-[400px] h-[600px] opacity-90 px-4 pt-6 lg:px-0 lg:py-0">
            <img
              className="rounded-md w-full h-full"
              src={about}
              alt="Foto institucional representando a equipe da PRC Invest"
            />
          </figure>
        </div>

        <div className="size-20 lg:size-30 xl:size-100 absolute left-0 bottom-0 rotate-270" aria-hidden="true">
          <img src={setaAmarela} alt="Seta decorativa" />
        </div>
      </div>
    </section>

  )
}
