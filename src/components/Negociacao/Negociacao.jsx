import React from 'react'
import { useInView } from 'react-intersection-observer'
import setaAmarela from '../../assets/seta-amarela.png';
import Card from './Card';

export default function Negociacao() {

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section
      ref={ref}
      id="negociacao"
      className={`bg-white transition-all duration-700 relative ${inView ? 'fade-in' : 'opacity-0'}`}
      aria-labelledby="titulo-negociacao"
    >
      <div className="max-w-6xl mx-auto py-32 px-4">
        <header className="text-center mb-8">
          <h2 id="titulo-negociacao" className="text-4xl font-lekton tracking-widest uppercase">
            Negociação
          </h2>
          <div className="w-full h-0.5 mt-4 bg-[#d3d32c]" />
        </header>

        <section className="text-center mb-12" aria-label="Resumo do processo de negociação">
          <h3 className="text-2xl font-lekton tracking-wider font-semibold">
            Quer vender seu precatório?
          </h3>
          <h3 className="text-2xl font-lekton tracking-wider font-semibold">
            A negociação é feita de forma Rápida e Segura.
          </h3>
        </section>

        <section className="flex flex-col gap-12 lg:gap-0 lg:flex-row items-center justify-between font-roboto py-16" aria-label="Etapas da negociação">

          <Card
            numero={'1'}
            titulo={'Proposta de Valor'}
            texto={
              'Apresentamos a proposta e negociamos o valor. Com a aprovação, solicitamos os documentos necessários para a cessão de crédito.'
            }
            icon={<svg stroke="currentColor" fill="inherit" className='size-10' stroke-width="0" viewBox="0 0 640 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg" ><path d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"></path></svg>}
          />

          <div className="size-10 rotate-225 lg:rotate-135" aria-hidden="true">
            <img className="w-full" src={setaAmarela} alt="Seta indicativa da próxima etapa" />
          </div>

          <Card
            numero={'2'}
            titulo={'Verificação Jurídica'}
            texto={
              'Nosso time jurídico cuida de toda a análise do processo e dos documentos, garantindo segurança em cada etapa.'
            }
            icon={<svg stroke="currentColor" fill="inherit" stroke-width="0" className='size-10' viewBox="0 0 512 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg" ><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>}
          />

          <div className="size-10 flex-none rotate-225 lg:rotate-135" aria-hidden="true">
            <img className="w-full" src={setaAmarela} alt="Seta indicativa da próxima etapa" />
          </div>

          <Card
            numero={'3'}
            titulo={'Cessão de Crédito'}
            texto={
              <span>
                Marcamos com você o melhor dia e local para assinar a escritura.
                Nosso time acompanha tudo e o <b>valor é pago à vista no ato da cessão.</b>
              </span>
            }
            icon={<svg stroke="currentColor" fill="inherit" stroke-width="0" className='size-10' viewBox="0 0 640 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M320 144c-53.02 0-96 50.14-96 112 0 61.85 42.98 112 96 112 53 0 96-50.13 96-112 0-61.86-42.98-112-96-112zm40 168c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h16v-55.44l-.47.31a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09l15.33-10.22a23.99 23.99 0 0 1 13.31-4.03H328c4.42 0 8 3.58 8 8v88h16c4.42 0 8 3.58 8 8v16zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zm-16 272c-35.35 0-64 28.65-64 64H112c0-35.35-28.65-64-64-64V176c35.35 0 64-28.65 64-64h416c0 35.35 28.65 64 64 64v160z"></path></svg>}
          />
        </section>

        <footer className="flex items-center justify-center mt-12">
          <a
            href="https://api.whatsapp.com/send?phone=5521967799759"
            target="_blank"
            rel="noreferrer"
            title="Iniciar negociação via WhatsApp"
          >
            <button className="bg-[#d3d32c] hover:bg-[#d32a6f] hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out hover:text-white px-8 py-3 rounded-md text-[#232323] uppercase font-lekton font-bold text-xl tracking-wide hover:underline">
              Venda Aqui Seu Precatório
            </button>
          </a>
        </footer>
      </div>
    </section>

  )
}
