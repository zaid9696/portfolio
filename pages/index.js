import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import {server} from '../config/index';

export default function Home({results}) {

    const {main} = results;
    // console.log(main);
  return (
      
      <>
        <Hero />
        <Skills />
        <Portfolio main={main} />
        <Contact />
      </>

   ) 


}


export async function getStaticProps() {


      const res = await fetch(`${server}/api/allData`);
      const results = await res.json();

      return {

        props: {results}
      }

}