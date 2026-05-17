import React, { useEffect, useState } from 'react'
import man from '../../assets/man.png';
import setaAmarela from '../../assets/seta-amarela.png';
import setaRosa from '../../assets/seta-rosa.png';
import quadroBranco from '../../assets/quadro-branco.png';
import woman from '../../assets/woman.png';
import TextoDigitado from './TextoDigitado'
import Button from '../WhatsAppButton/Button';


export default function Slider() {
  const [fillColor, setFillColor] = useState('fill-[#d3d32c]') // amarelo PRC
  const [mainImage, setMainImage] = useState(man);
  const [setaImage, setSetaImage] = useState(setaAmarela);
  const [animating, setAnimating] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const frases = [
    {
      titulo1: 'Seu Precatório',
      titulo2: 'Sem Preocupação.',
      descricao: 'Processo descomplicado e seguro.'
    },
    {
      titulo1: 'Cuidamos de tudo',
      titulo2: 'Do início ao fim.',
      descricao: 'Segurança e agilidade no seu processo.'
    }
  ];
  const [textoIndex, setTextoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true); // ativa o fade-out

      setTimeout(() => {
        setFillColor((prev) => (prev === 'fill-[#d3d32c]' ? 'fill-[#d32a6f]' : 'fill-[#d3d32c]'));
        if (mainImage === man) {
          setSetaImage(setaRosa);
          setMainImage(woman);
          setTextoIndex(1);
        } else {
          setSetaImage(setaAmarela);
          setMainImage(man);
          setTextoIndex(0);
        }
        setAnimating(false); // volta com o fade-in
      }, 600); // espera o fade-out acabar
    }, 10000);

    return () => clearInterval(interval);
  }, [mainImage]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * -30; // mais movimento
      const y = (e.clientY / window.innerHeight - 0.5) * -30;
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (

    <section id="inicio" className="relative h-dvh flex justify-center bg-white overflow-hidden" aria-label="Seção inicial do site - destaque institucional">

      <svg
        className={`w-full h-full transition-all ${fillColor} duration-800 ease-in-out`}
        id="svg"
        viewBox="0, 0, 400,213.28125"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-label="Fundo gráfico estilizado com curvas"
      >
        <g id="svgg">
          <path id="path0" d="M0.040 106.625 C 0.062 165.269,0.100 209.360,0.125 204.606 L 0.170 195.962 32.877 163.322 L 65.583 130.682 96.625 130.674 L 127.667 130.667 127.667 171.917 L 127.667 213.167 129.333 213.167 L 131.000 213.167 131.000 171.917 L 131.000 130.667 226.292 130.667 L 321.583 130.667 290.125 162.125 L 258.667 193.584 258.667 203.375 L 258.667 213.167 260.333 213.167 L 262.000 213.167 262.000 204.111 L 262.000 195.056 293.875 163.201 L 325.750 131.345 325.792 172.173 C 325.815 194.628,325.887 213.000,325.952 213.000 C 326.017 213.000,342.030 197.044,361.537 177.542 L 397.005 142.083 398.419 142.035 L 399.833 141.987 399.875 177.619 C 399.898 197.216,399.936 165.269,399.959 106.625 L 400.000 0.000 362.917 0.000 L 325.834 0.000 325.792 63.625 L 325.750 127.250 228.417 127.250 L 131.083 127.250 131.041 96.248 L 130.999 65.246 154.541 41.711 C 167.489 28.766,182.170 14.086,187.165 9.088 L 196.246 0.000 98.123 0.000 L 0.000 0.000 0.040 106.625 " stroke="none" fill-rule="evenodd"></path>
          <path id="path1" d="M163.625 32.626 L 130.999 65.251 131.041 96.250 L 131.083 127.250 228.417 127.250 L 325.750 127.250 325.792 63.625 L 325.834 0.000 261.042 0.001 L 196.250 0.001 163.625 32.626 M32.875 163.323 L 0.167 195.965 0.167 204.566 L 0.167 213.167 63.917 213.167 L 127.667 213.167 127.667 171.917 L 127.667 130.667 96.625 130.674 L 65.583 130.682 32.875 163.323 M131.000 171.917 L 131.000 213.167 194.833 213.167 L 258.667 213.167 258.667 203.375 L 258.667 193.584 290.125 162.125 L 321.583 130.667 226.292 130.667 L 131.000 130.667 131.000 171.917 M293.875 163.201 L 262.000 195.056 262.000 204.111 L 262.000 213.167 330.917 213.167 L 399.833 213.167 399.833 177.577 L 399.833 141.987 398.419 142.035 L 397.005 142.083 361.537 177.542 C 342.030 197.044,326.017 213.000,325.952 213.000 C 325.887 213.000,325.815 194.628,325.792 172.173 L 325.750 131.345 293.875 163.201 " stroke="none" fill="#6c6c6b" fill-rule="evenodd"></path>
        </g>
      </svg>

      <main className={mainImage === man ? 'absolute bottom-0 lg:w-full lg:flex lg:items-center lg:justify-center 2xl:gap-5' : 'absolute bottom-0 lg:w-full lg:flex lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-10 2xl:gap-40'}>

        <figure
          className="relative transition-transform duration-800 ease-out"
          style={{ transform: `translate(${offset.x * 0.8}px, ${offset.y * 0.1}px)` }}
        >
          <img
            src={mainImage}
            alt={mainImage === man ? "Homem representando o cliente da PRC Invest" : "Mulher representando o cliente da PRC Invest"}
            className={`w-[clamp(350px,28vw,600px)] h-[clamp(520px,68dvh,900px)] lg:w-[clamp(400px,30vw,680px)] lg:h-[clamp(630px,72dvh,980px)] 2xl:w-[clamp(470px,32vw,780px)] 2xl:h-[clamp(720px,76dvh,1100px)] ${animating ? 'fade-out' : 'fade-in'} transition-all duration-800 ease-out object-contain object-bottom`}
          />
        </figure>

        <article className={mainImage === man ? 'absolute top-[60%] left-[3%] lg:relative' : 'absolute top-[60%] left-[3%] lg:relative lg:mb-[150px]'}>
          <picture>
            <img
              src={quadroBranco}
              alt="Quadro branco com mensagem"
              className={`w-[350px] lg:w-[480px] 2xl:w-[560px] ${animating ? 'fade-out' : 'fade-in'} transition-transform duration-800 ease-out`}
              style={{
                transform: `translate(${offset.x * 0.5}px, ${offset.y * 0.5}px)`,
              }}
            />
            <img
              src={setaImage}
              alt="Ícone de seta indicando ação"
              className={`absolute w-[45px] lg:w-[80px] 
            ${setaImage === setaAmarela ? `top-[-7px] left-[-7px] animate-from-top-left ${animating && 'fade-out'}` : `bottom-[-7px] right-[-7px] animate-from-bottom-right ${animating && 'fade-out'}`}
            transition-transform duration-800 ease-out`}
              style={{
                transform: `translate(${offset.x * 0.8}px, ${offset.y * 0.8}px)`,
              }}
            />
          </picture>

          <header
            className="absolute top-1/5 px-4 lg:top-1/4 lg:px-8 transition-transform duration-800 ease-out"
            style={{
              transform: `translate(${offset.x * 1}px, ${offset.y * 1}px)`,
            }}
          >
            <div className="font-lekton flex flex-col gap-1 lg:gap-2 2xl:gap-4">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl">
                <TextoDigitado text={frases[textoIndex].titulo1} />
              </h1>

              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold lg:font-bold">
                <TextoDigitado text={frases[textoIndex].titulo2} />
              </h2>

              <p className={`${mainImage === man ? 'text-[#d3d32c]' : 'text-[#d32a6f]'} font-semibold lg:font-bold uppercase`}>
                <TextoDigitado text={frases[textoIndex].descricao} />
              </p>
            </div>
          </header>
        </article>
      </main>

      <div className="fixed bottom-2 z-100 right-2 flex items-center justify-center">
        <Button />
      </div>

    </section>
  )
}