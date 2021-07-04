import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import {main} from '../data/data';

export default function Home() {

   
    return (
      
      <>
        <Hero />
        <Skills />
        <Portfolio main={main} />
        <Contact />
      </>

   ) 


}
