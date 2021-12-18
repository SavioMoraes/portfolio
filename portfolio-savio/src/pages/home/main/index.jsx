import React from 'react';
import { HardSkills, Projetos } from '../../../components'
// import { HardSkills, Projetos, Contatos} from '../../../components'
import './main.css';

function Main() {
  return (
    <div className="main">
      <section>
        <HardSkills />  
      </section>
      <section>
        <Projetos />  
      </section>
      {/* <section id="contacts">
        <Contatos />  
      </section>   */}
    </div>
  )
}

export default Main;
