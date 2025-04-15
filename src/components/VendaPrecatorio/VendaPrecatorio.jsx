import React from 'react'
import { Formulario } from '../Formulario/Formulario'
import { useInView } from 'react-intersection-observer'
import { ToastContainer } from 'react-toastify';




export default function VendaPrecatorio() {

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <>
      <section
        id="venda"
        ref={ref}
        className={`bg-white transition-all duration-700 relative ${inView ? 'fade-in' : 'opacity-0'}`}
        aria-labelledby="titulo-venda"
      >
        <div className="max-w-6xl mx-auto py-32 px-4">

          <header className="text-center mb-8">
            <h2 id="titulo-venda" className="text-4xl font-lekton tracking-widest uppercase">
              Venda seu Precatório
            </h2>
            <div className="w-full h-0.5 mt-4 bg-[#d3d32c]" />
          </header>

          <section className="text-center flex flex-col gap-4 lg:items-center lg:gap-0 mb-8" aria-label="Chamada para contato">
            <h3 className="text-2xl font-lekton tracking-wider font-semibold">
              Deseja receber uma proposta pro seu precatório?
            </h3>
            <h3 className="text-2xl font-lekton tracking-wider font-semibold">
              Envie-nos o seu contato!
            </h3>
          </section>

          <section aria-label="Formulário de contato">
            <Formulario />
          </section>

        </div>
      </section>
      <ToastContainer position='top-right' limit={1} />
    </>

  )
}
