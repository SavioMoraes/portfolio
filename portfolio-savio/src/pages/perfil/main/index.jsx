import React from 'react';
import './main.css';
import foto from './images/savio-transp.png'

function Main() {
  return (
    <div className="page-profile">
      <section className="image">
        <div className="div-image"></div>
          <img src={ foto } alt="Foto de rosto Sávio Moraes" />  
        <div className="saudation">
          <p>Olá, meu nome é <span>Sávio Moraes</span>,</p>
          <p>Sou entusiasta em tecnologia, tenho 41 anos e sou</p>
          <p>Desenvolvedor Web Full Stack Júnior</p>
        </div>
      </section>
      <section className="page-profile-text">
        <div className="container-text">
          <p>Atualmente estou cursando Desenvolvimento Web Full Stack na Trybe, onde já desenvolvi mais de 25 projetos com HTML, CSS, JavaSrcipt, React, TDD, Test Jest, NodeJS, MySQL, MongoDB entre outras tecnologias e metodologias aplicadas!</p>
          <p>Também sou formado em Gestão de Tecnologia da Informação pela Unip</p>
        </div>
      </section>
      <section className="works">
        <div className="works-container">
          <h4 className="title-works">Trabalhos anteriores</h4>
          <div className="span-works">
            <span className="span-works-text">Além de todos os projetos de softwares desenvolvidos na <a className="trybe" href="https://www.betrybe.com/" alt="site da Trybe" rel="noreferrer" target="_blank">Trybe</a>, escola de desenvolvimento Web Full Stack, que procura alinhar seus projetos com o que o estudante vai vivenciar no mercado de trabalho, também possuo as seguintes experiências profissionais:
            </span>
          </div>
          <div className="works-experiencies">
            <p className="works-experiencies-text">10/2018 a 05/2019 – Indra – Cargo: Suporte Técnico Operacional Pleno: Atendimento Nível 2 no Posto de Serviço de Apoio local na Petrobras. Hardware, Softwares, Redes, Manutenção, Impressoras e Videoconferência.</p>
            <p className="works-experiencies-text">04/2017 a 07/2017 – Hospital do Coração de Balneário Camboriú – Cargo: Auxiliar de TI: Serviços de Suporte em TI: Redes e Telecom, Sistemas Operacionais da Microsoft, Pacote Office, ERP Tasy da Philips (cadastro no sistema, liberação de perfis, parametrização de dados no sistema à nível de conhecimento básico), suporte e configuração de impressoras HP e Zebra, CorelDRAW, Photoshop, Manutenção de Computadores, segurança da informação e gerenciadores de e-mail.</p>
            <p className="works-experiencies-text">Freelancer: Já fiz serviços freelancer de criação (texto/redação) para sites de ‘comparação de tecnologias’, cadastro de conteúdo / SEO de páginas em WordPress e formatação e manutenção de computadores.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Main;
