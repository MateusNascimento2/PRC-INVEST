import React from 'react'

export default function Card({numero, texto, titulo, icon}) {
  return (
    <div className='flex flex-col items-center gap-6 w-[300px]'>
      <div className='flex flex-col items-center gap-2'>
        <span className='fill-[#d3d32c]'>
          {icon}
        </span>
        <span className='uppercase font-bold font-lekton text-lg'>{titulo}</span>
      </div>


      <div className='flex flex-col items-center gap-2'>
        <div className='border-2 px-3 py-1 border-[#d3d32c] rounded-full'>
          <span className='font-lekton text-base font-bold'>{numero}</span>
        </div>

        <span className='font-roboto text-sm/5 text-[#6C6C6B] lg:h-[50px]'>
          {texto}
        </span>
      </div>
    </div>
  )
}
