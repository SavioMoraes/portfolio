import React from 'react';
import { HardSkills, Projetos } from '../../../components'
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
    </div>
  )
}

export default Main;
