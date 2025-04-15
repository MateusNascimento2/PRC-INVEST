import { useState, useRef } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { InputMask } from '@react-input/mask';
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";



export function Formulario() {
  const [name, setName] = useState('');
  /*   const [valueBirthdate, setValueBirthdate] = useState(''); */
  const [email, setEmail] = useState('');
  const [valueTelephone, setValueTelephone] = useState('');
  const [valueCPFCNPJ, setValueCPFCNPJ] = useState('');
/*   const [valueProcesso, setValueProcesso] = useState('');
 */  const [valueOrigemPrecatorio, setValueOrigemPrecatorio] = useState('');
/*   const [valueTribunal, setValueTribunal] = useState('');
 */  const [valueObservacoes, setValueObservacoes] = useState('');
  /*   const [selectedFormFloat, setSelectedFormFloat] = useState('left');
    const [selectedForm, setSelectedForm] = useState(1); */

  const recaptcha = useRef();

  const handleCPFCNPJChange = (event) => {
    const inputValue = event.target.value.replace(/\D/g, '');

    let formattedValue = '';

    if (inputValue.length <= 11) {
      formattedValue = inputValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else {
      formattedValue = inputValue.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }

    setValueCPFCNPJ(formattedValue);
  };

  const handleTelephone = (event) => {
    setValueTelephone(event.target.value)
  };

  /*   const handleBirthdate = (event) => {
      setValueBirthdate(event.target.value);
    } */

  async function handleNewMessage(event) {
    event.preventDefault()

    const captchaValue = recaptcha.current.getValue();

    if (!captchaValue) {
      return toast.error("Por favor verifique o reCAPTCHA!")
    }


    if (!name || !email || !valueTelephone || !valueCPFCNPJ || valueOrigemPrecatorio === "") {
      return toast.error('Preencha os campos de CPF/CNPJ, nome, email, telefone e origem do precatório !')
    }


    try {
      window.dataLayer.push({ 'event': 'formulario' });

      /*       if (selectedFormFloat === 'left') {
              const resp = await axios.post('https://prcapi.discloud.app/api/sendMail', { valueCPFCNPJ, name, email, valueTelephone, valueObservacoes, selectedForm });
              console.log(resp)
      
      
              if (!resp.error) {
                toast.success('Enviado com sucesso!')
              }
            } else { */
      const resp = await axios.post('https://prcapi.discloud.app/api/sendMail', { valueCPFCNPJ, name, email, valueTelephone, valueObservacoes, valueOrigemPrecatorio });

      if (!resp.error) {
        toast.success('Enviado com sucesso!')
      }


    } catch (err) {
      console.log(err)
      toast.error(
        'Erro ao enviar formulário!'
      )
    } finally {
      setName('');
      setEmail('');
      setValueTelephone('');
      setValueCPFCNPJ('');
      setValueOrigemPrecatorio('');
      setValueObservacoes('');
      recaptcha.current.reset();
    }
  }

  /*   const handleSelectedForm = (floatValue, value) => {
      setSelectedFormFloat(floatValue);
      setSelectedForm(value);
  
    } */


  return (
    <section className="pt-6">
      {/*       <div className="flex items-center mb-6">
        <div className={`flex flex-col flex-1 hover:bg-gray-100 cursor-pointer gap-1 p-1 ${selectedFormFloat === 'left' && 'border-b border-[#d3d32c]'}`}>
          <div className="flex items-center justify-center gap-2 font-lekton text-base lg:text-xl" onClick={() => handleSelectedForm('left', 1)}>
            <span>
              <svg className="size-[14px] lg:size-[16px]" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"></path><path fill="none" stroke-miterlimit="10" stroke-width="32" d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"></path></svg>
            </span>
            <p>CPF/CNPJ</p>
          </div>

        </div>

        <div className={`flex flex-col flex-1 hover:bg-gray-100 cursor-pointer gap-1 p-1 ${selectedFormFloat === 'right' && 'border-b border-[#d3d32c]'}`}>
          <div className="flex items-center justify-center gap-1 font-lekton text-base lg:text-xl" onClick={() => handleSelectedForm('right', 2)} >
            <span>
              <svg className="size-[14px] lg:size-[16px]" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 8V1h1v6.117L8.743 6.07a.5.5 0 0 1 .514 0L11 7.117V1h1v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8"></path><path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"></path><path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"></path></svg>
            </span>
            <p>Número do Processo</p>
          </div>

        </div>

      </div> */}


      <form onSubmit={handleNewMessage}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            {/*               <input type="text" className="border w-full p-3 border-[#dfdfdf] focus:outline-[#d3d32c]" placeholder="Número do Processo *" maxLength={20} value={valueProcesso} onChange={event => setValueProcesso(event.target.value)} /> */}
            <div className="flex flex-col lg:flex-row  lg:items-center gap-4">
              <select className="flex-1 border p-3 border-[#dfdfdf] focus:outline-[#d3d32c] text-neutral-500" value={valueOrigemPrecatorio} onChange={event => setValueOrigemPrecatorio(event.target.value)}>
                <option value="">Selecione a Origem do Precatório *</option>
                <option value="Federal">Federal</option>
                <option value="Estadual">Estadual</option>
                <option value="Municipal">Municipal</option>
                <option value="Outros">Outros</option>
              </select>
              {/*                 <input type="text" className="border p-3 flex-1 border-[#dfdfdf] focus:outline-[#d3d32c]" placeholder="Tribunal *" value={valueTribunal} onChange={event => setValueTribunal(event.target.value)} /> */}
            </div>
          </div>
          <div className="flex">
            <input type="text" className="border p-3 flex-1 border-[#dfdfdf] focus:outline-[#d3d32c]" placeholder="Digite seu nome completo *" name="name" value={name} onChange={event => setName(event.target.value)} />

          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <input type="text" className="border p-3 flex-1 border-[#dfdfdf] focus:outline-[#d3d32c]" placeholder="Digite seu CPF/CNPJ *" maxLength={18} value={valueCPFCNPJ} onChange={handleCPFCNPJChange} />
              <input type="text" className="border p-3 flex-1 border-[#dfdfdf] focus:outline-[#d3d32c]" placeholder="Digite seu E-mail *" name="email" value={email} onChange={event => setEmail(event.target.value)} />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              {/*               <InputMask
                mask="__/__/____"
                value={valueBirthdate}
                replacement={{ _: /\d/ }}
                type="text"
                placeholder="Digite sua data de nascimento *"
                name="birthdate"
                onChange={handleBirthdate}
                className="border p-3 flex-1 border-[#dfdfdf] focus:outline-[#d3d32c]"
              /> */}
              <InputMask
                mask="+55 (__) _____-____"
                type="tel"
                placeholder="(DDD) 99999-9999 *"
                name="phone"
                replacement={{ _: /\d/ }}
                value={valueTelephone}
                onChange={handleTelephone}
                className="border font-roboto p-3 flex-1 border-[#dfdfdf] focus:outline-[#d3d32c]"
              />
            </div>
          </div>
          <div className="flex">
            <textarea className="border p-3 flex-1 border-[#dfdfdf] focus:outline-[#d3d32c]" name="observacoes" rows="3" placeholder="Tem alguma observação que gostaria de deixar ?" value={valueObservacoes} onChange={event => setValueObservacoes(event.target.value)}></textarea>
          </div>
          <ReCAPTCHA ref={recaptcha} sitekey='6Lfl7SUpAAAAAHIYf2nGse7SE3Zj3m4ghhi1bGmr' />
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-0 justify-between">
            <div>
              <span className="font-lekton tracking-wide text-base">Ao informar meus dados, eu concordo com a <a className="underline" href="/politica-privacidade" target="_blank">Política de Privacidade.</a></span>
            </div>
            <div>
              <button type="submit" title='Fale Conosco' className='bg-[#d3d32c] hover:bg-[#d32a6f] hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out hover:text-white px-8 py-3 rounded-md text-[#232323] uppercase font-lekton font-bold text-xl tracking-wide hover:underline'>
                Enviar Mensagem
              </button>
            </div>
          </div>

        </div>
      </form>
    </section>
  )
}
