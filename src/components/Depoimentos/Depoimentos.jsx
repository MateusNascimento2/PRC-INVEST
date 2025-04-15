import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import axios from 'axios'
import setaAmarela from '../../assets/seta-amarela.png';


export default function Depoimentos() {
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    setIsLoading(true)

    axios.get('https://prcapi.discloud.app/api/avaliacoes')
      .then((res) => {
        setReviews(res.data.avaliacoes || [])
      })
      .catch((err) => {
        console.error("Erro ao buscar dadosPRC:", err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])




  return (
    <section
      ref={ref}
      id="depoimentos"
      className={`bg-[#6c6c6b11] transition-all duration-700 relative ${inView ? 'fade-in' : 'opacity-0'}`}
      aria-labelledby="titulo-depoimentos"
    >
      <div className="max-w-6xl mx-auto py-32 px-4">

        <header className="text-center mb-8">
          <h2 id="titulo-depoimentos" className="text-4xl font-lekton tracking-widest uppercase">
            Depoimentos
          </h2>
          <div className="w-full h-0.5 mt-4 bg-[#d3d32c]" />
        </header>

        <section
          aria-label="Resumo da seção de depoimentos"
          className="text-center flex flex-col lg:items-center gap-4 mb-8"
        >
          <h3 className="text-2xl font-lekton tracking-wider lg:w-[400px] font-semibold">
            Experiências reais de quem confiou na PRC Invest
          </h3>
        </section>

        <section
          aria-label="Lista de avaliações de clientes"
          className="py-16 flex flex-col gap-16 items-center lg:flex-row lg:flex-wrap lg:justify-center lg:items-start lg:gap-8"
        >
          {isLoading ? (
            <div role="status" aria-live="polite">
              <svg
                stroke="currentColor"
                fill="#d3d32c"
                className="animate-spin size-10"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="..." />
              </svg>
            </div>
          ) : (
            reviews.map((review, index) => (
              <article
                key={index}
                className="bg-white fill-[#d3d32c] lg:hover:fill-[#d32a6f] flex flex-col gap-4 relative shadow-sm w-[300px] p-6 rounded-md lg:hover:scale-105 transition-all ease-in-out duration-300"
                aria-label={`Depoimento de ${review.autor}`}
              >
                <figure className="absolute size-12 -left-3.5 -top-2.5" aria-hidden="true">
                  <img src={setaAmarela} alt="" />
                </figure>

                <blockquote className="font-roboto text-sm/6 tracking-wide text-balance lg:h-[200px]">
                  “{review.comentario}”
                </blockquote>

                <figcaption className="font-lekton text-sm font-semibold text-[#6C6C6B] lg:h-[40px]">
                  {review.autor}
                </figcaption>

                <div className="flex gap-[2px]" aria-label={`Nota: ${review.nota} estrelas`}>
                  {[...Array(review.nota)].map((_, i) => (
                    <svg key={i} stroke="currentColor" fill="inherit" stroke-width="0" className='size-5' viewBox="0 0 512 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M394 480a16 16 0 0 1-9.39-3L256 383.76 127.39 477a16 16 0 0 1-24.55-18.08L153 310.35 23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480z"></path></svg>
                  ))}
                </div>
              </article>
            ))
          )}
        </section>
      </div>
    </section>
  )
}
