import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function PoliticaPrivacidade() {
  return (
    <div className='bg-[#6c6c6b11]'>
      <div className='bg-[#d3d32c] h-[95px]'>
        <Header />

      </div>
      <main className='max-w-6xl mx-auto px-4 py-[124px] font-roboto text-sm/6 tracking-wide text-[#6C6C6B] flex flex-col gap-8'>
        <section className='flex flex-col gap-2'>
          <h2 className='text-3xl lg:text-4xl text-black font-lekton tracking-widest uppercase border-b border-[#d3d32c]'>1. Introdução</h2>
          <p>Bem-vindo à Política de Privacidade da <strong>PRC INVEST</strong>. Nosso compromisso é garantir a proteção dos seus dados pessoais com base nos princípios da LGPD. Esta política explica como coletamos, utilizamos, armazenamos e compartilhamos suas informações.</p>
        </section>

        <section className='flex flex-col gap-2'>
          <h2 className='text-3xl lg:text-4xl text-black font-lekton tracking-widest uppercase border-b border-[#d3d32c]'>2. Coleta de Informações</h2>
          <p>Coletamos informações pessoais quando você se cadastra em nosso site, preenche formulários ou nos fornece dados durante o processo de intermediação na compra de precatórios.</p>
          <p>As informações podem incluir:</p>
          <ul className='list-disc list-inside'>
            <li>Nome completo</li>
            <li>CPF ou CNPJ</li>
            <li>Data de nascimento</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone</li>
            <li>Número do processo judicial</li>
            <li>Origem do precatório</li>
            <li>Tribunal de origem</li>
            <li>Outras informações relevantes para a negociação</li>
          </ul>
          <p>Também podemos coletar dados de navegação, como endereço IP, cookies e dados de ferramentas como Google Analytics.</p>
        </section>

        <section className='flex flex-col gap-2'>
          <h2 className='text-3xl lg:text-4xl text-black font-lekton tracking-widest uppercase border-b border-[#d3d32c]'>3. Uso das Informações</h2>
          <p>As informações são utilizadas para:</p>
          <ul className='list-disc list-inside'>
            <li>Intermediar a compra de precatórios</li>
            <li>Realizar contato com você</li>
            <li>Prestar serviços e suporte</li>
            <li>Aperfeiçoar nossos processos e atendimento</li>
          </ul>
          <p>Não compartilhamos suas informações pessoais com terceiros sem o seu consentimento, salvo em caso de exigência legal ou cumprimento contratual.</p>
        </section>

        <section className='flex flex-col gap-2'>
          <h2 className='text-3xl lg:text-4xl text-black font-lekton tracking-widest uppercase border-b border-[#d3d32c]'>4. Compartilhamento de Informações</h2>
          <p>Podemos compartilhar seus dados com parceiros e prestadores de serviços que atuam em nosso nome, exclusivamente para fins operacionais e comerciais.</p>
          <p>Todos estão contratualmente obrigados a manter a confidencialidade e a adotar práticas seguras de proteção de dados, conforme esta política e a legislação aplicável.</p>
        </section>

        <section className='flex flex-col gap-2'>
          <h2 className='text-3xl lg:text-4xl text-black font-lekton tracking-widest uppercase border-b border-[#d3d32c]'>5. Segurança e Retenção de Dados</h2>
          <p>Adotamos medidas técnicas e organizacionais para proteger suas informações contra acessos não autorizados, perdas, alterações ou divulgações indevidas.</p>
          <p>Seus dados serão armazenados pelo tempo necessário para cumprir os objetivos descritos nesta política, ou por prazos superiores exigidos por lei.</p>
        </section>

        <section className='flex flex-col gap-2'>
          <h2 className='text-3xl lg:text-4xl text-black font-lekton tracking-widest uppercase border-b border-[#d3d32c]'>6. Seus Direitos</h2>
          <p>Nos termos da LGPD, você tem os seguintes direitos:</p>
          <ul className='list-disc list-inside'>
            <li>Confirmação da existência de tratamento</li>
            <li>Acesso aos seus dados</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos</li>
            <li>Portabilidade dos dados a outro fornecedor</li>
            <li>Revogação do consentimento</li>
            <li>Informações sobre compartilhamento de dados</li>
          </ul>
          <p>Para exercer seus direitos, entre em contato conosco pelos canais abaixo.</p>
        </section>

        <section className='flex flex-col gap-2'>
          <h2 className='text-3xl lg:text-4xl text-black font-lekton tracking-widest uppercase border-b border-[#d3d32c]'>7. Contato</h2>
          <p>Se você tiver dúvidas ou solicitações relacionadas a esta política ou aos seus dados pessoais, fale com a gente:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:contato@prcinvest.com">contato@prcinvest.com</a></li>
            <li><strong>Telefone:</strong> <a href="tel:+5521967799759">(21) 9 6779-9759</a></li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>

  )
}
