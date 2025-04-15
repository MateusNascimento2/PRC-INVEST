import React, { useState, useEffect } from 'react'
import setaAmarela from '../../assets/seta-amarela.png'
import axios from 'axios'


export default function Cards(inView) {
  const [anosFinal, setAnosFinal] = useState(0)
  const [precatoriosFinal, setPrecatFinal] = useState(0)
  const [investidoresFinal, setInvestidoresFinal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [anosAtual, setAnosAtual] = useState(0)
  const [precAtual, setPrecAtual] = useState(0)
  const [investidoresAtual, setInvestidoresAtual] = useState(0);


  useEffect(() => {
    const now = new Date()
    setAnosFinal(now.getFullYear() - 2021)
  }, [])

  useEffect(() => {
    setIsLoading(true)

    axios.get('https://prcapi.discloud.app/api/dadosPRC')
      .then((res) => {
        setPrecatFinal(res.data.precatorios || 0);
        setInvestidoresFinal(res.data.investidores || 0);
      })
      .catch((err) => {
        console.error("Erro ao buscar dadosPRC:", err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  // Quando entrar na tela, começa a contagem
  useEffect(() => {
    if (inView && !isLoading) {
      const duration = 700 // milissegundos

      const animate = (setter, finalValue) => {
        const startTime = performance.now()

        const step = (currentTime) => {
          const progress = Math.min((currentTime - startTime) / duration, 1)
          const value = Math.floor(progress * finalValue)
          setter(value)

          if (progress < 1) {
            requestAnimationFrame(step)
          }
        }

        requestAnimationFrame(step)
      }

      animate(setAnosAtual, anosFinal)
    }
  }, [inView, anosFinal, isLoading])

  // Quando entrar na tela, começa a contagem
  useEffect(() => {
    if (inView && !isLoading) {
      const duration = 700 // milissegundos

      const animate = (setter, finalValue) => {
        const startTime = performance.now()

        const step = (currentTime) => {
          const progress = Math.min((currentTime - startTime) / duration, 1)
          const value = Math.floor(progress * finalValue)
          setter(value)

          if (progress < 1) {
            requestAnimationFrame(step)
          }
        }

        requestAnimationFrame(step)
      }

      animate(setPrecAtual, precatoriosFinal)
      animate(setInvestidoresAtual, investidoresFinal)
    }
  }, [inView, precatoriosFinal, investidoresFinal, isLoading])

  return (
    <div className="font-lekton flex flex-wrap justify-center lg:flex-row gap-4">
      {[{
        label: 'Anos de atuação',
        value: anosAtual,
        icon: <svg stroke="currentColor" fill='fill-inherit' stroke-width="0" viewBox="0 0 384 512" height="24" width="24" className='size-7' xmlns="http://www.w3.org/2000/svg"><path d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64l0 11c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437l0 11c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 256 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-11c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1l0-11c17.7 0 32-14.3 32-32s-14.3-32-32-32L320 0 64 0 32 0zM96 75l0-11 192 0 0 11c0 19-5.6 37.4-16 53L112 128c-10.3-15.6-16-34-16-53zm16 309c3.5-5.3 7.6-10.3 12.1-14.9L192 301.3l67.9 67.9c4.6 4.6 8.6 9.6 12.1 14.9L112 384z"></path></svg>
      }, {
        label: 'Precatórios negociados',
        value: precAtual,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className='size-7' fill='fill-inherit' viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6zm1 7V3.5L18.5 9H15zM8 12h8v2H8v-2zm0 4h5v2H8v-2z" />
        </svg>

      }, {
        label: 'Investidores próprios',
        value: investidoresAtual,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className='size-7' fill='fill-inherit' viewBox="0 0 24 24">
          <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2c-3.3 0-9.8 1.6-9.8 4.9V22h19.6v-3.1c0-3.3-6.5-4.9-9.8-4.9z" />
        </svg>

      }].map((item, index) => (
        <div
          key={index}
          className="relative bg-white text-[#d3d32c] hover:text-[#d32a6f] rounded-md px-4 py-4 text-center shadow hover:scale-105 transition-all duration-300 w-full md:w-[252px] flex items-center fill-[#d3d32c] hover:fill-[#d32a6f]"
        >
          <i className='flex-none fill-inherit'>{item.icon}</i>
          <div className='flex-1'>
            <div>
              <p className="text-sm text-[#6C6C6B] font-semibold uppercase">{item.label}</p>
              {item.label === 'Precatórios negociados' || item.label === 'Investidores próprios'
                ? <p className="text-3xl font-bold text-inherit mt-1">{Math.round(item.value / 10) * 10}+</p>
                : <p className="text-3xl font-bold text-inherit mt-1">{item.value}</p>}
            </div>

          </div>

          <img
            className={`absolute w-8 -right-1 rotate-180 -bottom-1 
            ${inView ? 'animate-from-bottom-right delay-[1000ms]' : 'opacity-0'}`}
            src={setaAmarela}
            alt=""
          />
        </div>
      ))}
    </div>
  )
}
