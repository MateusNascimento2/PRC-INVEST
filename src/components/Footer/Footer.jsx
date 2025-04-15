import React, {useState, useEffect} from 'react'
import { useInView } from 'react-intersection-observer'
import Logo from '../Header/Logo'

export default function Footer() {
  const [year, setYear] = useState()

  useEffect(() => {
      const date = new Date();
      setYear(date.getFullYear());
  }, [])

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })


  return (
    <footer ref={ref} className={`bg-[#6C6C6B] transition-all duration-700 ${inView ? 'fade-in' : 'opacity-0'}`}>
      <div className='border-b border-neutral-400 w-full'>
        <div className='max-w-6xl mx-auto py-12 px-4 flex flex-col gap-6 lg:flex-row lg:gap-0 items-center justify-between'>
          <Logo className='w-18 h-auto' fillUp={'#D4D32A'} fillDown={'#FFF'} />
          <div className='lg:flex lg:items-center lg:gap-1'>
            <p className='text-white text-center font-lekton tracking-wide uppercase font-semibold'>Entre em contato diretamente conosco! </p>
            <p className='text-center lg:mb-1'><a className='underline underline-offset-8 font-normal text-white font-lekton tracking-wide uppercase' href="https://api.whatsapp.com/send?phone=5521967799759" target="_blank" rel="noreferrer">Enviar Mensagem</a></p>
          </div>

          <div className='flex items-center gap-4'>
            <button title='WhatsApp' className={'w-4 fill-white'}>
              <a href="https://api.whatsapp.com/send?phone=5521967799759" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>

            </button>
            <button title='Instagram' className={'w-4 fill-white'}>
              <a href="https://www.instagram.com/prc.invest/" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className='max-w-6xl mx-auto py-20 px-4'>

        <div className='flex flex-col mb-6 items-center gap-4 lg:flex-row lg:justify-between'>
          <div className='lg:w-[450px]'>
            <ul className='font-lekton text-white divide-y text-sm divide-neutral-400'>
              <li className='flex items-center gap-2 p-2 '>
                <svg className='size-4 flex-none' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"></path><circle cx="256" cy="192" r="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle></svg>
                Uprise Bussines Center - Av. das Américas, 18500 - Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22790-704
              </li>

              <li className='flex items-center gap-2 p-2'>

                <svg className='size-4' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path></svg>
                (21) 9 6779-9759
              </li>
              <li className='flex items-center gap-2 p-2'>
                <svg className='size-4' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14a1.75 1.75 0 0 1-1.75 1.75H1.75A1.75 1.75 0 0 1 0 18.75v-14C0 3.784.784 3 1.75 3ZM1.5 7.412V18.75c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0Zm0-2.662v.852l10.36 7a.25.25 0 0 0 .28 0l10.36-7V4.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"></path></svg>
                <a href="mailto:contato@prcinvest.com">contato@prcinvest.com</a>
              </li>
              <li className='flex items-center gap-2 p-2'>
                <p className='text-center lg:mb-1'><a className='underline underline-offset-2 font-normal text-white font-lekton tracking-wide' href="/politica-privacidade" target="_blank" rel="noreferrer">Política de Privacidade</a></p>
              </li>
            </ul>
          </div>

          <div className='font-lekton text-center text-white flex flex-col lg:gap-2 2xl:gap-4'>
            © {year} PRC Invest. Todos os direitos reservados.
          </div>
        </div>

        <div>
          <p className='text-white text-sm text-center font-lekton tracking-wide uppercase font-semibold'>PRC INVEST | CNPJ: 43.067.184/0001-10</p>
        </div>
      </div>

    </footer>
  )
}
