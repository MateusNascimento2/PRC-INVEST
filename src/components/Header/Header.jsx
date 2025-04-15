import React, { useState, useEffect, useRef } from 'react'
import Burger from './Burger'
import Logo from './Logo'
import { useNavigate, useLocation } from 'react-router-dom'; // importe isso


export default function Header() {
  const [atTop, setAtTop] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = (id) => {
    if (location.pathname !== '/') {
      // Se não estiver na home, redireciona para / e depois rola para o id
      navigate('/', { replace: false });

      // Espera o React carregar a home antes de fazer o scroll
      setTimeout(() => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // delay leve para garantir que a home carregue
    } else {
      // Se já estiver na home, só rola até o id
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: 'smooth' });
    }

    setShowNav(false); // fecha o menu mobile
  };

  // Scroll: topo e direção
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setAtTop(scrollY === 0);

      if (scrollY > lastScrollY && scrollY > 50) {
        setShowHeader(false); // rolando para baixo
      } else {
        setShowHeader(true); // rolando para cima
      }

      setLastScrollY(scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Clique fora do menu mobile
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setShowNav(false);
      }
    };

    if (showNav) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNav]);

  return (
    <header className={`
      fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
      ${showNav && 'translate-y-0'}
      ${showHeader && !showNav ? 'translate-y-0' : '-translate-y-full'}
      ${atTop ? 'bg-transparent shadow-none' : 'bg-white shadow-sm'}
    `}>
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
        <h1>
          <Logo className='w-28 h-auto' fillUp={atTop ? '#FFF' : '#D4D32A'} fillDown={'#232323'} />
        </h1>

        {/* Desktop nav */}
        <nav className="hidden lg:block">
          <ul className={`flex items-center gap-8 font-lekton font-[500] text-[18px] ${atTop ? 'text-white' : 'text-[#232323]'}`}>
            <li><button onClick={() => handleMenuClick('inicio')} className='hover:font-bold cursor-pointer'>Início</button></li>
            <li><button onClick={() => handleMenuClick('empresa')} className='hover:font-bold cursor-pointer'>Empresa</button></li>
            <li><button onClick={() => handleMenuClick('negociacao')} className='hover:font-bold cursor-pointer'>Negociação</button></li>
            <li><button onClick={() => handleMenuClick('depoimentos')} className='hover:font-bold cursor-pointer'>Depoimentos</button></li>
            <li className={`${atTop ? 'bg-white text-black' : 'bg-[#6C6C6B] text-white'} py-2 px-4 hover:scale-105 hover:font-bold cursor-pointer`}>
              <button className='cursor-pointer' onClick={() => handleMenuClick('venda')}>Venda seu precatório</button>
            </li>
          </ul>
        </nav>

        <div className='hidden lg:flex lg:items-center lg:gap-4'>
          <button title='WhatsApp' className={atTop ? 'w-4 fill-white' : 'w-4 fill-black'}>
            <a href="https://api.whatsapp.com/send?phone=5521967799759" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
            </a>

          </button>
          <button title='Instagram' className={atTop ? 'w-4 fill-white' : 'w-4 fill-black'}>
            <a href="https://www.instagram.com/prc.invest/" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </button>
        </div>

        {/* Botão Burger */}
        <div className='lg:hidden'>
          <Burger atTop={atTop} showNav={showNav} setShowNav={setShowNav} />
        </div>
      </div>

      {/* Mobile nav */}
      <nav
        ref={navRef}
        className={`lg:hidden absolute w-full bg-white shadow-md top-0 left-0 z-40 
        transition-transform duration-300 ease-in-out
        ${showNav ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="flex justify-end px-2 pt-4">
          <Burger atTop={false} showNav={showNav} setShowNav={setShowNav} />
        </div>

        <ul className="flex flex-col items-center gap-6 py-8 font-lekton text-[#232323] text-lg">
          <li><button onClick={() => handleMenuClick('inicio')} className='hover:font-bold cursor-pointer'>Início</button></li>
          <li><button onClick={() => handleMenuClick('empresa')} className='hover:font-bold cursor-pointer'>Empresa</button></li>
          <li><button onClick={() => handleMenuClick('negociacao')} className='hover:font-bold cursor-pointer'>Negociação</button></li>
          <li><button onClick={() => handleMenuClick('depoimentos')} className='hover:font-bold cursor-pointer'>Depoimentos</button></li>
          <li className={`${atTop ? 'bg-white text-black' : 'bg-[#6C6C6B] text-white'} py-2 px-4 hover:scale-105 hover:font-bold cursor-pointer`}>
            <button onClick={() => handleMenuClick('venda')}>Venda seu precatório</button>
          </li>

          <div className='flex items-center gap-4'>
            <button className={'w-4 fill-black'}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
            </button>
            <button className={'w-4 fill-black'}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </button>
          </div>
        </ul>


      </nav>
    </header>
  );
}
