import * as React from "react";
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import {main} from '../data/data';
import PortFolio from '../components/Portfolio';
import Contact from '../components/Contact';

// markup
const IndexPage = () => {

    // console.log(main);

  return (
    <>
     <Hero />
     <Skills />
     <PortFolio main={main} />
     <Contact />
    </>  
  )
}

export default IndexPage
